# Do you agree or disagree with your classmates’ observations and recommendations as they compared and contrasted traditional operating systems with cloud-based operating platforms?

# What do you agree with and what might you add to your classmates’ observations and recommendations? Perhaps there is something they overlooked?

# If you disagree with your classmates’ observations or recommendations, what might you suggest that they do differently to ensure a more positive outcome?

# Did your classmates’ posts answer the questions posed comprehensively? What might have been omitted from their response that leaves you questioning their observations or recommendations of one approach over the other?

---
1
---

There will always be people who require the amount of customization that a traditional system allows, in addition to the people running enough complex computing for a continuous amount of time to make cloud based platforms less cost effective. The cost and trouble of migrating to a cloud from a traditional system is also a deterrent for some. The most compelling reason for me though is that like any other technology that we're given alternatives to, people will always continue to operate their own traditional systems for no other reason than for the strange, strange love of it. It's why I take notes on serverless architecture with a fountain pen from 1943, it's why people restore antique cars that get half a mile to a gallon of gas, and it's why even if there were absolutely NO downsides to cloud-based platforms, some people would still go through the trouble of maintaining a traditional OS. The trouble is the point.

I strongly disagree with this.  From my experience the lack of cloud adoption is simply because a person or team is not educated enough to use the platform.  This is coupled with the retortion that "it works the way it is" despite the massive advantages of cloud architecture.  That is great if you want to set up your personal projects that way but we have a responsibility as the next generation of somputer scientists to do things in a more thoughtful way.

---
2
---

I don’t think cloud-based systems make traditional operating systems obsolete, yet. Eventually I think this will occur but at this point the infrastructure can’t handle the needs of cloud-based systems to the point where the can replace traditional operating systems. Coverage and throughput would need to see significant advancement before this can become a possibility.

I am curious what your source is when determining "coverage and throughput."  Anything sub-100ms is universally accepted as a "good enough" response time and when using a RESTful service you can achieve that on any of the aforementioned platforms.  Also, depending on your architecture (Node or Java > non-async python), you can achieve that on thousands of requests concurrently just one instance of your service running.  Scalability means that you can maintain this level of performance should you decide to increase the user base and conversely increase the service instance count.