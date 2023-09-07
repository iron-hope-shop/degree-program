# What is the slope coefficient for the weight variable? Is this coefficient significant at 5% level of significance (alpha=0.05)? (Hint: Check the P-value, P is greater than the absolute value of t, for weight in Python output. Recall that this is the individual t-test for the beta parameter.) See Step 5 in the Python script.
The slope coefficient for the weight (WT) variable is -3.9495.  The t-statistic for WT is -5.359 with a corresponding p-value of zero.  Since this p-value is less than the significance level, we conclude that a significant linear relationship exists (Berrier, 2019).

# What is the slope coefficient for the horsepower variable? Is this coefficient significant at 5% level of significance (alpha=0.05)? (Hint: Check the P-value, P is greater than the absolute value of t, for weight in Python output. Recall that this is the individual t-test for the beta parameter.) See Step 5 in the Python script.
The slope coefficient for the horsepower (HP) variable is -0.0304.  The t-statistic for HP is -2.920 with a corresponding p-value of 0.007.  Since this p-value is less than the significance level, we conclude that a significant linear relationship exists (Berrier, 2019).

# Last week, you performed an overall F-test. Why do you now need to perform individual t-tests? What are the differences in the interpretation of the two tests?
Individual t-tests are necessary to determine whether a regression parameter is significant to the model.  If it is not (p-value greater than significance level) then the predictor variable should be dropped from the model and a new model should be investigated (Berrier, 2019).  The overall f-test considers all the regression parameters other than the inercept parameter in order to determine significance of beta parameters but is not as specific as the t-test (Berrier, 2019).

# What is the coefficient of determination of your multiple regression model from Module Six? Provide appropriate interpretation of this statistic.

The coefficient of determination of my multiple regression model from Module Six is 0.807.  This value can be interpreted to mean that 80.7% of the variance in MPG can be explained by WT and HP.

