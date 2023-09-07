`Use a 5% level of significance.`

# Define the null and alternative hypothesis in mathematical terms and in words.

The null hypothesis is that the financial, energy, and technology group means are equal.

<p><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><msub><mi>μ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>μ</mi><mi>3</mi></msub></math></p>

The alternative hypothesis is that two groups with unequal means exist.

<p><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>H</mi><mi>a</mi></msub><mo>:</mo><msub><mi>μ</mi><mi>i</mi></msub><mo>≠</mo><msub><mi>μ</mi><mi>j</mi></msub><mo>,</mo><mtext>&#160;for some&#160;</mtext><mi>i</mi><mo>≠</mo><mi>j</mi></math></p>

# Report the level of significance.

The level of significance is 5%, or <math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>&#x03B1;<!-- α --></mi>
  <mo>=</mo>
  <mn>0.05</mn>
</math>.

# Include the test statistic and the P-value. See Step 2 in the Python script.

The test-statistic is <math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>F</mi><mo>=</mo><mn>55.07</mn></math>.  And the <i>p</i>-value is 0.


# Provide your conclusion and interpretation of the test. Should the null hypothesis be rejected? Why or why not?
Since the <i>p</i>-value is less than the significance level, we reject the null hypothesis.  Sufficient statistical evidence exists to support the claim that the mean of the ETFs is different. 

# Does a side-by-side boxplot of the 10-year returns of ETFs from the three sectors confirm your conclusion of the hypothesis test? Why or why not? See Step 3 in the Python script.

The boxplot confirms that the means are different, especially for the technology ETF (seen below).

