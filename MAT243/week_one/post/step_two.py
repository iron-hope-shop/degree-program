import pandas as pd

### FROM STEP 1
temperatures = [66, 57, 64, 54, 43, 48, 54, 55, 48, 45, 57, 54, 54, 61]
temperatures_df = pd.DataFrame(temperatures, columns=["temperature"])

### STEP 2
mean = temperatures_df["temperature"].mean()
print("Mean=", round(mean, 2))
median = temperatures_df["temperature"].median()
print("Median=", round(median, 2))
variance = temperatures_df["temperature"].var()
print("Variance=", round(variance, 2))
stdeviation = temperatures_df["temperature"].std()
print("Standard Deviation=", round(stdeviation, 2))
statistics = temperatures_df["temperature"].describe()
print("\nDescribe method")
print(statistics)
