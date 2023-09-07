# What are some advantages and disadvantages of C++, Java, and Python?

<table>
  <!-- <caption>cap placeholder</caption> -->
  <tr>
    <td></td>
    <th scope="col">C++</th>
    <th scope="col">Java</th>
    <th scope="col">Python</th>
  </tr>
  <tr>
    <th scope="row">Advantages</th>
    <td>Most efficient of the three</td>
    <td>More efficient programs than Python</td>
    <td>Quick from pseudocode to product</td>
  </tr>
  <tr>
    <th scope="row">Disadvantages</th>
    <td>More prone to errors due to complexity</td>
    <td>Auto memory allocation can lead to capacity issues</td>
    <td>Slower applications than Java or C++</td>
  </tr>
</table>

# How would you make your selection? What criteria would you consider and why?
I would select a language based on maintainability and delivery date.  For example, if I was charged with creating a small (max of a few hundred requests/second) RESTful service before the end of the day I would choose Python.  This is because I believe I could create the most wholly completed product within the timeframe; additionally, not many people I work with know C++.

If I were creating an enterprise-scale REST service and had 2 weeks I would use Java.  That is because I feel Java is a little more robust when it comes to serving thousands of requests per second while not using too much processing capacity.  More people I know use Java than C++ (zero people I know use C++).  When I no longer maintained the project there would be a learning curve but it would not be as steep as it would with C++ (and most of the enhancements would probably be derivative).

# Why might you integrate different languages, such as C++ and Java, in a project?
I may use Python for the frontend when creating a dynamic website, partly because I hate using JSP but mainly because it would be easy to do.  Meanwhile, the backend processing/ETL would be handled by a more efficient language such as Java/C++ thus reducing overall latency.

# How would your decision impact the security of a program?
Contrary to my initial thoughts, I now believe C++ would be the least secure language as there is a lot more to manage; however, if you have infinite time and plan accordingly using modern protocols, these languages are equally secure.