# This module will be used to prepare a pandas dataframe and calculate descriptive statistics
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import numpy as np
import random
import base64
from io import BytesIO

### STEP 1
# input your data in the Python list below. 
# For example, if your temperature data is:  81, 79, 80, 85, 83, 85, 87, 84, 84, 88, 85, 87
# then the step below should be set as:   temperatures = [81, 79, 80, 85, 83, 85, 87, 84, 84, 88, 85, 87]
temperatures = [66, 57, 64, 54, 43, 48, 54, 55, 48, 45, 57, 54, 54, 61]
# print(f"num: {len(temperatures)}")

# prepare a dataframe for temperatures.
temperatures_df = pd.DataFrame(temperatures, columns=['temperature'])

# print temperatures dataframe
print(temperatures_df)

### STEP 2
# Pandas dataframe has several methods that calculate descriptive statistics.
# mean
mean = temperatures_df['temperature'].mean()
print("Mean=", round(mean,2))

# median
median = temperatures_df['temperature'].median()
print("Median=", round(median,2))

# variance
variance = temperatures_df['temperature'].var()
print("Variance=", round(variance,2))

# standard deviation
stdeviation = temperatures_df['temperature'].std()
print("Standard Deviation=", round(stdeviation,2))

# describe - a useful function that calculates several different descriptive statistics
statistics = temperatures_df['temperature'].describe()
print("")
print ("Describe method")
print (statistics)

### STEP 3
# # line chart
# plt.plot(temperatures_df['temperature']) # plot

# # setting a title for the plot, x-axis and y-axis
# plt.title('Line plot of temperature data', fontsize=20) 
# plt.xlabel('day')
# plt.ylabel('temperature')

# # show the plot
# plt.show()

### STEP 4
# creates temperature data for Zion. You don't need to know how this data is created. 
# The temperature data created for Zion will be unique to you. 
mean = random.randint(temperatures_df['temperature'].min(),temperatures_df['temperature'].max())
std_deviation = random.randint(round(temperatures_df['temperature'].std(),0),round(2*temperatures_df['temperature'].std(),0))
zion_temperatures = np.random.normal(mean, std_deviation, 25)
zion_temperatures = pd.DataFrame(zion_temperatures, columns=['temperature'])

# side-by-side boxplots require the two dataframes to be concatenated and require a variable identifying the data
temperatures_df['id'] = 'my_data'
zion_temperatures['id'] = 'zion_data'
both_temp_df = pd.concat((temperatures_df, zion_temperatures))

# sets a title for the plot, x-axis, and y-axis
plt.title('Boxplot for comparison', fontsize=20) 

# prepares the boxplot
fig = sns.boxplot(x="id",y="temperature",data=both_temp_df)

# shows the plot
# plt.show()