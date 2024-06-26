# Serverless Resource Configuration Tuner- AWS Lambda Power Tuning 

A "*Serverless Resource Configuration Tuner*" refers to a tool or system designed to automatically optimize
the configuration settings of serverless resources, such as functions and associated components, 
in a cloud computing environment. Serverless computing allows developers to build and run applications without managing the underlying infrastructure. 
This includes serverless platforms like AWS Lambda, Azure Functions, Google Cloud Functions, and others.

This project focuses on optimizing the performance and cost-efficiency of AWS Lambda functions by dynamically tuning their power configurations. 
AWS Lambda Power Tuning helps identify the most cost-effective power configuration for your Lambda functions by running multiple tests and comparing the execution time and cost at different power settings.

# Features

**Automated Power Tuning**: Automatically tests multiple power configurations to find the optimal setting for performance and cost.

**Cost Analysis**: Provides detailed analysis of cost vs. performance for each power configuration.

**Customizable Settings**: Allows customization of parameters like memory size and timeout for more tailored tuning.

**Visualization**: Generates visual reports to easily compare the results of different power configurations.

**Serverless Architecture**: Leverages AWS Step Functions and AWS Lambda for a completely serverless implementation.

# Configuration

**Lambda Function Memory Sizes**: Customize the range of memory sizes to test.

**Timeout Settings**: Adjust the timeout settings for the Lambda functions being tested.

**Concurrency Levels**: Define the concurrency levels for more robust testing.

# What results can be expected from Lambda Power Tuning?
The state machine will generate a visualization of average cost and speed for each power configuration.

**Optimal Power Configuration**: Identifies the most cost-effective and performance-efficient power setting.

**Performance Metrics**: 
- Detailed execution time and cost analysis for each power setting. 
- Provides best and worst cost and execution time scenarios.

**Visual Reports**:
- Graphs and charts comparing execution time and cost.
- Visual representation of the best and worst performance and cost configurations.
  
**Comprehensive Analysis**: Detailed logs and summary reports with recommendations.

**Enhanced Efficiency**: Improved resource utilization and potential cost reduction.

**Automated Adjustments**: Option to automatically apply the recommended power setting.

# AWS Lambda Power Tuning Results

**EXAMPLE OF PERFORMANCE TUNING** : 

<img width="957" alt="aws lambda" src="https://github.com/sanaya-bhardwaj/Serverless-Resource-Configuration-Tuner/assets/135012941/09e344f3-a25d-451d-ad24-4ee769f7f426">

**Try it!** : 
https://lambda-power-tuning.show/#gAAAAQACAAQABsAL;ZooQR4yvkUa/pQRGRC5zRaADHUVjOftE;QdWhOEMkoziDT5Q4xhiIOMYYiDi6RNc4
