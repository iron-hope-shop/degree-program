# Evaluate the data requirements for borrowers. Using the CS 319 CSV Tutorial, linked in this module’s resources, download data from the Kiva Data Snapshots page. Review this information to shape your thoughts. Consider the borrower user story and assess what available Kiva data will best fit their needs and can be developed within an embedded system, given technology limitations. Think about the following questions as you make your assessment:
1. What data does the borrower want to access locally?
2. What data fields from the CSV file will be most applicable?
3. What type of interface is possible with the limited resources of an embedded system?
4. Who will the different users of the system be? What will each user need to be able to do?
5. What are the design requirements for the system?

# Evaluate the data requirements for borrowers
Based on the borrower user story provided, the borrower will want to access basic information about Kiva and borrowing, including loan interest rates, repayment terms, and eligibility requirements. They will also want to be able to view their own loan requests and track the status of their loans. The most applicable data fields from the CSV file will be loan amount, interest rate, repayment term, and status of the loan. With the limited resources of an embedded system, a simple interface that displays key loan details will be sufficient for the borrower to access the information they need. This could include a display screen that shows the loan amount, interest rate, repayment term, and loan status. The interface should be easy to navigate and understand, with clear labeling and simple navigation. Given the constraints of the embedded system, it may not be possible to include more advanced features such as video or audio capabilities. However, the key goal is to provide the borrower with the information they need in a way that is accessible and easy to use, given the limitations of the system. The design requirements for the system, as viewed from the perspective of the borrower who will only be using a flip phone, include a simple and user-friendly interface, accessibility, and functionality. The system should be designed with a simple and intuitive interface that is easy to navigate and understand, with clear labeling and simple navigation. The system should be designed to work on flip phones, which have limited internet and device resources, and should be compatible with the limitations of these devices. The system should be designed to meet the needs of borrowers, with features that allow them to access the information and functionality they need. These design requirements will ensure that the system is accessible and functional for borrowers who are using flip phones, and meets their needs while taking into account the limitations of these devices.

# Assess specific borrower stories to refine their data needs
After reviewing the five borrower stories from Kiva, it is clear that the data requirements for evaluating a Kiva loan application are important and necessary. The data helps to provide a comprehensive understanding of the borrower, their business, and the impact that the loan will have.

1. Franny and Joe's story: A couple who fell in love with sushi and each other, open their own restaurant with a focus on creating a comfortable space and fresh menu.
2. Diana's story: A photographer and artist who uses a wheelchair, and her partner, turn a bus into an RV and start an art business with the help of a Kiva loan.
3. Viviana's story: An educator turned shoemaker, who left her career to pursue her passion for making high-end handmade shoes, and starts a successful business.
4. Karmin's story: A woman who took control of her financial future by using her 401(k) to open a thrift store, which not only sells affordable items but also has a food pantry and job center, and offers therapeutic services to the community.
5. Jamilya's story: A repeat borrower from Kiva who successfully repaid her previous loan and is now applying for another loan to buy hay for her livestock, with the goal of further developing her farm.

The stories demonstrate the diverse range of industries and backgrounds that Kiva supports, and how the loans can help individuals and businesses achieve their goals and succeed. The data requirements, such as financial information, business plans, and borrower profiles, help to evaluate the feasibility and potential impact of the loan. Additionally, the stories show the importance of considering both quantitative and qualitative data in the evaluation process. For example, the borrower's financial history and business plan are important quantitative data points, while the borrower's passion and motivation for their business are important qualitative data points. After reviewing borrower stories on the Kiva Lend Filter page, I recommend prioritizing borrower data for UI/UX development. Financial information, business plans, and borrower profiles provide lenders with a comprehensive understanding of the borrower and their business. To improve the borrower's experience, additional fields such as currency and country name should be displayed on their profile, which can also help infer language preference. Showing which lenders have contributed to their loan creates a personal connection with the borrower. The diverse range of borrowers requires a tailored approach to lending, which should be reflected in the UI/UX of the application.

# Recommend borrower data priorities for UI/UX development
As a borrower, the top data priorities for an embedded UI/UX system should include:
1. Personal information: borrower's name, country, language, contact information.
2. Business information: business name, type, and industry, as well as financial information related to the business.
3. Loan information: loan amount, interest rate, repayment period, and any other relevant terms.
4. Repayment history and status.

# Evaluate the data requirements for lenders
As a lender, the Kiva Data Snapshots page can provide the following data to support their needs:
1. Loan data: This includes data on loan amounts, interest rates, repayment terms, and borrower information.
2. Lender data: This includes data on the number of loans made, repayment rates, and the amount of money lent.
3. Borrower data: This includes data on the borrower's business type, location, and industry.
4. Repayment data: This includes data on the borrower's loan repayment history and current status.

The interface for the system should be simple and user-friendly, with clear navigation and access to the necessary data fields. It should be optimized for small screens and low-bandwidth connections, as the embedded system may have limited resources. There could be different types of lenders in this scenario, including individual lenders, small businesses or organizations, microfinance institutions, and crowdfunding platforms. Each type of lender may have different needs and expectations in terms of the borrowers they lend to and the level of involvement they have in the lending process. It is important for the system to accommodate and cater to the needs of all types of lenders to ensure their satisfaction and continued use of the platform.





---

Kiva (2023). Data Snapshots. Retrieved June 4, 2023, from https://www.kiva.org/build/data-snapshots