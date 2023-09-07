import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import numpy as np
import random

### STEP 1
temperatures = [66, 57, 64, 54, 43, 48, 54, 55, 48, 45, 57, 54, 54, 61]
temperatures_df = pd.DataFrame(temperatures, columns=['temperature'])

### STEP 4
mean = random.randint(temperatures_df['temperature'].min(),temperatures_df['temperature'].max())
std_deviation = random.randint(round(temperatures_df['temperature'].std(),0),round(2*temperatures_df['temperature'].std(),0))
zion_temperatures = np.random.normal(mean, std_deviation, 25)
zion_temperatures = pd.DataFrame(zion_temperatures, columns=['temperature'])
temperatures_df['id'] = 'my_data'
zion_temperatures['id'] = 'zion_data'
both_temp_df = pd.concat((temperatures_df, zion_temperatures))
plt.title('Boxplot for comparison', fontsize=20)
fig = sns.boxplot(x="id",y="temperature",data=both_temp_df)
plt.show()