import matplotlib.pyplot as plt
import pandas as pd

### FROM STEP 1
temperatures = [66, 57, 64, 54, 43, 48, 54, 55, 48, 45, 57, 54, 54, 61]
temperatures_df = pd.DataFrame(temperatures, columns=["temperature"])

### STEP 3
plt.plot(temperatures_df["temperature"])
plt.title("Line plot of temperature data", fontsize=20)
plt.xlabel("day")
plt.ylabel("temperature")
plt.show()
