# Describe the incident. What happened? What released escapements or defects occurred? Provide links to references if possible.
The incident I have chosen to write about is the Knight Capital Group (KCG) rogue trading algorithm.  KCG created software called Smart Market Access Routing System (SMARS) which was designed to route stock trading orders.  This system replaced their older one, Power Peg.  Power Peg had been decomissioned 9 years prior; however, on August 1, 2012, SMARS triggered a Power Peg job which in turn began making trades in an infinite loop.  This caused an approximate $440 million in losses, dropped their stock price by 90%, and eventually led to an acquisition of the company.  The release of these details caused highly-valued clients such as TD Ameritrade, Vanguard, and Fidelity Investments to stop using their API and thus lost their business.  

# What were the impacts of the released escapements or defects?
The failure is manifested in the fact that they
didn’t have a kill switch in place. It could have been a very simple
algorithmic expression for a programmer to write: IF the daily
volume reaches a certain level, THEN shut it down. 