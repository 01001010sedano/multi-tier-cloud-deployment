# --- Terraform Configuration to Provision Cloud Infrastructure ---

# Configure the AWS Provider (Simulated using LocalStack for the internship)
provider "aws" {
  region                      = "ap-southeast-1"
  access_key                  = "test"
  secret_key                  = "test"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# 1. Create a Virtual Private Cloud (VPC) for secure networking
resource "aws_vpc" "capstone_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "Capstone-VPC"
    Project = "Jane-Sedano-Internship"
  }
}

# 2. Create a Public Subnet inside the VPC
resource "aws_subnet" "capstone_public_subnet" {
  vpc_id                  = aws_vpc.capstone_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "ap-southeast-1a"

  tags = {
    Name = "Capstone-Public-Subnet"
  }
}

# 3. Create a Security Group allowing Web/HTTP and SSH traffic
resource "aws_security_group" "capstone_web_sg" {
  name        = "capstone-web-sg"
  description = "Allow HTTP inbound traffic for the Capstone Hub"
  vpc_id      = aws_vpc.capstone_vpc.id

  ingress {
    description = "HTTP from anywhere"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH for admin access"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Capstone-SecurityGroup"
  }
}

# 4. Provision the underlying EC2 Compute Instance (Kubernetes Node)
resource "aws_instance" "capstone_k8s_node" {
  ami           = "ami-ubuntu-latest" # Placeholder AMI
  instance_type = "t3.medium"         # Sufficient for K8s master/worker combo
  subnet_id     = aws_subnet.capstone_public_subnet.id
  vpc_security_group_ids = [aws_security_group.capstone_web_sg.id]

  tags = {
    Name = "Capstone-Web-Node-1"
  }
}
