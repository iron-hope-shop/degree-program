### STEP 1
import pandas as pd

temperatures = [66, 57, 64, 54, 43, 48, 54, 55, 48, 45, 57, 54, 54, 61]
temperatures_df = pd.DataFrame(temperatures, columns=["temperature"])
print(temperatures_df)