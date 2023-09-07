#   Check to be sure your scatterplots of miles per gallon against horsepower and weight of the car were included in your attachment. Do the plots show any trend? If yes, is the trend what you expected? Why or why not? See Steps 2 and 3 in the Python script.

Below are the graphs for miles per gallon (MPG) against horsepower (HP) and weight (WT) of the cars.  Both graphs are skewed to the right and if we were to draw an approximation of the regression curve it would have a negative slope.  We know from our previous discussion and from Fig. 1 that WT and MPG have an inverse relationship.  This was not a surprising result.  Logically speaking, more energy is consumed when accelerating an object with more mass.  Figure 2 reveals that MPG and horsepower are also inversely related.  There are a lot of other variables that could be considered in this analysis but, based on the known data, this is a reasonable result.  Higher horsepower vehicles generally consume more fuel and thusly have a lower MPG.

[mpg_vs_weight.png]
[mpg_vs_hp.png]

#   What are the coefficients of correlation between miles per gallon and horsepower? Between miles per gallon and the weight of the car? What are the directions and strengths of these coefficients? Do the coefficients of correlation indicate a strong correlation, weak correlation, or no correlation between these variables? See Step 4 in the Python script.

<!--remember to cite-->
# # # # # # # # # # # #
<!-- --- --- --- -- -->
Berrier, J., Chan, C., Nestler, S., Pardoe, I., Siu, R., Sturdivant, R. X., … Vahid, F. (2019). Correlation and coefficient of determination. In MAT 243: Applied Statistics I for Science, Technology, Engineering, and Math. Retrieved from https://learn.zybooks.com/zybook/SNHUMAT243v2/chapter/6/section/3?content_resource_id=42635938
<!--remember to cite-->
# # # # # # # # # # # #
<!-- --- --- --- -- -->

The coefficient of correlation between MPG and WT is -0.8638.  The coefficient between MPG and HP is -0.7758.  Based on these values the correlation between MPG and WT is strong negative, while the correlation between MPG and HP is moderate negative (Berrier, 2019).

#   Write the multiple regression equation for miles per gallon as the response variable. Use weight and horsepower as predictor variables. See Step 5 in the Python script. How might the car rental company use this model?

The multiple regression model, according to Berrier, is:
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>Y</mi>
  <mo>=</mo>
  <msub>
    <mi>&#x03B2;<!-- β --></mi>
    <mn>0</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>&#x03B2;<!-- β --></mi>
    <mn>1</mn>
  </msub>
  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>&#x03B2;<!-- β --></mi>
    <mn>2</mn>
  </msub>
  <msub>
    <mi>X</mi>
    <mn>2</mn>
  </msub>
  <mo>+</mo>
  <mo>&#x22EF;<!-- ⋯ --></mo>
  <mo>+</mo>
  <msub>
    <mi>&#x03B2;<!-- β --></mi>
    <mi>n</mi>
  </msub>
  <msub>
    <mi>X</mi>
    <mi>n</mi>
  </msub>
  <mo>+</mo>
  <mi>&#x03F5;<!-- ϵ --></mi>
</math>

In our case miles per gallon is the response variable while weight and horsepower are predictor variables.  The regression model would be:

Ycarrot = 37.2796 - 3.9495x_(1) - 0.0304x_(2)
<a href="https://www.codecogs.com/eqnedit.php?latex=\^{Y}&space;=&space;37.2796&space;-&space;3.9495X_{1}-0.0304X_{2}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\^{Y}&space;=&space;37.2796&space;-&space;3.9495X_{1}-0.0304X_{2}" title="\^{Y} = 37.2796 - 3.9495X_{1}-0.0304X_{2}" /></a>

This model would help to accurately determine how to price a rental car.  The company could use this to refine their price model.

#   Is at least one of the two variables (weight and horsepower) significant in the model? Run the overall F-test and provide your interpretation at 5% level of significance. See Step 5 in the Python script. Include the following in your analysis:
#   - Define the null and alternative hypothesis in mathematical terms and in words.
#   - Report the level of significance.
#   - Include the test statistic and the P-value. (Hint: F-Statistic and Prob (F-Statistic) in the output).
#   - Provide your conclusion and interpretation of the test. Should the null hypothesis be rejected? Why or why not?

To determine significance of the variables in the multiple regression model we need to determine the null and alternative hypotheses.  If there is a significant linear relationship between the response and predictor variables then the slope will not equal zero.  Thus, the null hypothesis is that the slope will equal zero.  The alternative hypothesis is that the slope will not equal zero.

<a href="https://www.codecogs.com/eqnedit.php?latex=H_{0}:X=0" target="_blank"><img src="https://latex.codecogs.com/gif.latex?H_{0}:X=0" title="H_{0}:X=0" /></a>
<a href="https://www.codecogs.com/eqnedit.php?latex=H_{a}:X\neq&space;0" target="_blank"><img src="https://latex.codecogs.com/gif.latex?H_{a}:X\neq&space;0" title="H_{a}:X\neq 0" /></a>

My interpretation of these hypotheses is based on a level of 5% significance.  The test statistic is 56.47.  The p-values for both wt and hp were less than 0.05 so we reject the null hyptothesis.  