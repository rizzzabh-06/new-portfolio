# Deployment Guide for rishabhrajsingh.com

This guide covers how to set up an AWS EC2 instance, configure DNS on Ionos, and deploy your portfolio website with Docker and SSL.

## 1. Create AWS EC2 Instance

1.  **Log in to AWS Console** and navigate to **EC2**.
2.  Click **Launch Instance**.
3.  **Name**: `portfolio-server`
4.  **OS Images**: Select **Ubuntu** (Ubuntu Server 24.04 LTS or 22.04 LTS).
5.  **Instance Type**: `t2.micro` (Free tier eligible) or `t3.micro`.
6.  **Key pair**:
    - Click **Create new key pair**.
    - Name: `portfolio-key`.
    - Type: `RSA`.
    - Format: `.pem`.
    - Click **Create key pair** and **save the downloaded file** safely (e.g., in `~/.ssh/`).
7.  **Network settings**:
    - Click **Edit**.
    - Ensure **Auto-assign public IP** is **Enable**.
    - **Security group**: Create a new security group.
        - Allow **SSH** (Port 22) from **Anywhere** (0.0.0.0/0) (or My IP for security).
        - Allow **HTTP** (Port 80) from **Anywhere** (0.0.0.0/0).
        - Allow **HTTPS** (Port 443) from **Anywhere** (0.0.0.0/0).
8.  **Configure Storage**: Default (8GB gp3) is usually fine, maybe upgrade to 16GB if you plan to host more.
9.  Click **Launch Instance**.

## 2. Configure Ionos DNS

1.  Go to your **EC2 Dashboard** and find your new instance.
2.  Copy the **Public IPv4 address** (e.g., `1.2.3.4`).
3.  Log in to **Ionos**.
4.  Navigate to **Domains & SSL** -> Select `rishabhrajsingh.com`.
5.  Go to **DNS** tab.
6.  Add/Edit the **A Record**:
    - **Host**: `@` (or leave empty)
    - **Points to**: `YOUR_EC2_IP` (paste the IP from step 2)
    - **TTL**: 1 hour (or lowest possible for faster propagation)
7.  Add another **A Record** (for www):
    - **Host**: `www`
    - **Points to**: `YOUR_EC2_IP`
8.  Save changes. *Note: DNS propagation can take up to 24-48 hours, but usually takes a few minutes.*

## 3. Server Setup

Open your terminal on your local machine.

### Connect to Server
```bash
# Set permission for key (only needed once)
chmod 400 ~/.ssh/portfolio-key.pem

# SSH into the server
ssh -i "~/.ssh/portfolio-key.pem" ubuntu@YOUR_EC2_IP
```

### Install Docker & Git
Run these commands inside the server:

```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Docker
sudo apt install -y docker.io docker-compose-v2 git

# Add user to docker group (avoids using sudo for docker commands)
sudo usermod -aG docker $USER
```
*Disconnect and reconnect for the group change to take effect:*
```bash
exit
ssh -i "~/.ssh/portfolio-key.pem" ubuntu@YOUR_EC2_IP
```

## 4. Deploy Application

### Clone Repository
```bash
git clone https://github.com/rizzzabh-06/new-portfolio.git
cd new-portfolio
```

### Enable SSL (First Time Only)
We need to get the SSL certificates. I created a script to handle this tricky part.

```bash
# Make script executable
chmod +x deploy/init-letsencrypt.sh

# Run the initialization script
# Follow the prompts (Type 'y' if asked)
sudo ./deploy/init-letsencrypt.sh
```
*This script starts Nginx, requests certificates from Let's Encrypt for `rishabhrajsingh.com`, and sets up auto-renewal.*

### Start Application
Once SSL is set up, start everything in production mode:

```bash
docker compose up -d
```

## 5. Verification
- Open your browser and go to `https://rishabhrajsingh.com`.
- You should see your portfolio secure (padlock icon) and running!

## Updating the Site
When you push changes to GitHub, deploy them by running:

```bash
# On the server:
cd new-portfolio
git pull
docker compose build --no-cache
docker compose up -d
```
