---
title: Interviewing
published: April 27, 2026
readTime: 15 min
---

There are a few categories of SWE interviews: phone screens/resume screens, behavioral, technical, and system design interviews.

## General Interviewing Advice

Typically, recruiters will provide you with information about your interview. If they don’t, follow up with them to ask for more details - it’s their job to make sure you know what to expect. You should look on Glassdoor and Reddit for more information about the interview and process. If you’re lucky, you might even see some sample problems. A typical SWE process will include a resume screen/recruiter phone screen, a technical leetcode-style interview, and a behavioral interview. This varies largely by company.

## Do Mock Interviews with Upperclassman

The best way to prepare for any interview type is to practice and participate in mock interviews. We cover how to practice for each interview type in depth below, but it is important that you practice interviewing until proper methods are ingrained in the way you interview. Find upperclassman friends, go to the CSL, or prompt voice-based AI to act as an interviewer for this.

## When to Schedule

If you have to schedule interviews with multiple companies, it’s best to try and schedule them in the same 1-2 weeks so you’ll be in “interview mode” the whole time, which is when your interview skills are super sharp since you’ve hopefully been studying and mock interviewing with your peers for weeks. If you have an outstanding offer from company X and still need to interview at company Y, ask X for an extension and ask Y to expedite their process, citing offer X.

## Follow Up

After every interview round, follow up with your interviewer/recruiter! Send them an email thanking them for the opportunity to interview with them. Show your appreciation for the conversations you had as well as the insights you may have gained from the interview. This is not a strict requirement, but can potentially help you stand out, especially since recruiters will now know you a little better than other candidates.

## Online Assessments (OA)

Online assessments are usually the first step you receive once you apply to a company. Some companies automatically send out these OAs to every applicant, others are more exclusive about it. In any case, it is favorable to complete OAs as soon as possible. OAs can ask a variety of questions, but the content of these questions are generally tech-related. They assess you on different tech skills, based on the type of role you applied to. For example, a lot of SWE roles will hand out leetcode and DSA-based OAs, whereas Data Science OAs can be more focused on SQL and Python. For SWE roles, technical OAs are typically given via the online platform [HackerRank](https://www.hackerrank.com/). After making an account, a variety of practice problems are available. However, if you are practicing DSA problems everyday on LeetCode/CodeForces, you should be prepared for these OAs.

## Phone Screens/Resume

These interviews are typically the first stage of the entire process. These are the least standardized types of interviews. It may be in the form of a phone call or video conference, but the overall idea behind this stage remains the same: understanding your experience and interests in tech.

It is vital that you know EXACTLY what you wrote on your resume and are able to justify any numbers/statistics on it. Your interviewer (may or may not be from a tech background) has free reign to ask you questions based on any part of your descriptions. For example, “How did you increase the performance of [Application] by X%? What did you use to determine this metric?”

Your interviewer can also ask questions related to your own interests in tech or in the company (“Why [Company X]? Why are you interested in this role?” etc). This is why it is especially beneficial to write your resume yourself rather than entirely hand it off to an LLM to write it for you.

# Behavioral Interviews

## Purpose

The purpose of behavioral interviews are for the interviewer to assess whether you are a good fit for the company. Do not overlook this as an “easy” interview. Although technical questions are typically not asked here, there is still a wide array of questions that can be thrown at you.

## What The Interview Looks Like

Questions in a behavioral interview can be about your fit within the company or yourself and your experiences. Oftentimes, you will be asked about situations that demonstrate your ability to overcome challenges or work in a team (or both). The interviewer is there to assess whether your personality, technical and non-technical skills, and interests are a good fit for the company and the role you are interviewing for.

## How to Answer a Question (STAR)

In any case, it is highly encouraged to use the STAR method, a very popular format, for answering behavioral interview questions. STAR stands for Situation, Task, Action, and Result. Here is a general overview:

<span style="text-decoration:underline;">Situation</span>: Describe and give background details about your experience. When was it, what type of situation was it, etc. Begin presenting the challenge at hand.

<span style="text-decoration:underline;">Task</span>: Describe the motivation behind what you sought to do, or what the issue at hand was.

<span style="text-decoration:underline;">Action</span>: Describe the measurable steps you took to overcome a challenge, increase performance, etc.

\
<span style="text-decoration:underline;">Result</span>: Describe the outcome of your action. It can be useful to briefly explain your takeaways from the experience as well.

[This handbook](https://www.techinterviewhandbook.org/behavioral-interview/) is a good resource for preparing for these kinds of interviews, as well as common questions that companies like to ask.

## Elevator Pitch (Tell me about yourself)

Almost every behavioral interview begins with the question, “Tell me about yourself”. This is for the interviewer to BRIEFLY learn about your academic and professional background, as well as your general technical interests. The answer to this question is pretty similar to that of an elevator pitch. If you don’t have an elevator pitch, this is where you should start.

An elevator pitch is a very short and concise explanation of who you are, what you are looking for, and what you have to offer. It is often 30 seconds long, and the idea behind it is that you are able to introduce yourself if you meet an important figure in an elevator and have very limited time to showcase yourself.

There are a variety of ways to format your answer, but the content often looks like this: your name, your current situation (e.g Computer Science major at Rutgers University learning about/focused on…), a recent internship/job or project that showcases your technical abilities, relevant skills you have (can be both technical and non-technical), as well as your interest in tech and the company you’re interviewing for a role at.

It’s good to write down your elevator pitch as well as answers to behavioral questions such as “Tell me about yourself”, and use it as a rough script to practice. However, do not memorize these answers and regurgitate them during interviews. Try not to use the exact wording in your written answers when practicing. Oftentimes, memorizing this way results in your answer sounding unnatural and robotic. The entire purpose of a behavioral interview is to connect with your interviewer, so ensure you’re actually having a **conversation**. It gets easier with practice, but the person on the other side is a human too. It always helps to appeal to their body language, tone, and general demeanor.

Here’s an example of how you could answer a behavioral interview question. “Tell me about a time when…” is a pretty common format for a behavioral question, and you can expect to get at least one question in this format.

**Question**: “Tell me about a time when you faced a difficult technical problem and how you solved it.”

**Answer**:

Situation:

During my internship as a software engineer, I worked on a feature that required processing and displaying a large amount of data in real time for users. Initially, the implementation worked correctly but was extremely slow when the dataset became large, which made the feature almost unusable.

Task:

My goal was to identify what was causing the slowdown and improve the performance so the feature could handle larger datasets efficiently.

Action:

To address this, I first spent time profiling the application to identify where the performance bottleneck was occurring. I discovered that several nested loops were repeatedly scanning the same data, which caused the time complexity to grow quickly as the dataset increased. I then refactored the logic to use more efficient data structures, specifically hash maps, so that the program could access needed values in constant time instead of repeatedly iterating through the entire dataset.

Result:

After implementing these changes, the performance improved significantly and the feature was able to handle much larger datasets without slowing down. This experience taught me the importance of carefully considering algorithmic efficiency and reinforced how small changes in data structures or approach can have a large impact on performance.

## How to Practice

One of the best ways to prepare for behavioral interviews is by consistently practicing how you speak about your past experiences. Start by creating a small set of stories from internships, projects, classes, or leadership roles that demonstrate things like solving technical problems, working on a team, or overcoming challenges. It helps to structure these stories using the STAR format (Situation, Task, Action, Result) so your answers stay organized and clearly show both what you did and what the outcome was.

Another important part of preparation is becoming comfortable portraying your answers out loud. Try practicing in front of a mirror, recording yourself, or explaining your stories to a friend. Listening to yourself may feel awkward at first, but it helps you notice when answers are too long, unclear, or unnatural.

Again, the goal is not to memorize exact scripts, but to become familiar with your stories and how you communicate them. Repeating this process until your answers feel comfortable will help you sound more natural and confident during an actual interview.

In order to prepare for a behavioral interview, check out these resources:

1. [Tech Interview Handbook](https://www.techinterviewhandbook.org/behavioral-interview/) - list of behavioral questions to practice.
2. Create a copy of [this](https://docs.google.com/document/d/1H3001XFiVSkRnU1u3e6UuHY2G0DSqEInce4ftYg_vX4/edit?usp=sharing) document. Fill in your answers in the “Answer” section for “Tell me about yourself”, “Why X company?”, and fill in the STAR outline for two stories that show your strengths & leadership, two stories that show weaknesses & failures, and two stories that show teamwork & conflict. You can then adapt these stories to answer a wide range of commonly asked behavioral questions.

# Technical Interviews - DS & A

## What is a Data Structures & Algorithms interview?

Technical data structures and algorithms (DSA) interviews are still the industry standard way to assess SWE candidates. These interviews test your ability to solve problems involving data structures and algorithms within a time limit. An example of a typical interview problem is reversing a string, reversing a linked list, or validating a binary search tree. While not usually representative of the actual job, there are several tried-and-true methods for studying for them.

## What the Interview Looks Like

A typical SWE DSA interview starts with you being asked to choose a programming language. Then, you will be presented with a question in a shared IDE. You are given time to read the question and come up with a method to solve it.

The best way to go about these interviews is not just to read the question silently in your head and code out the solution as fast as possible. Remember, the interviewer is trying to assess your ability to reason, problem-solve, and iterate through different solutions with different time/space complexities. You want to give them something to work with, and you do so by vocalizing your thoughts while coding.

First, read the question. Ask clarifying questions that may expose edge cases and/or the desired scope of the solution. For example:

- Are we prioritizing optimizing for time or space complexity?
- How should the code function for [edge case]?
- What are the input size constraints?
- Are elements unique, and if not, how should I handle duplicates?

When coding the solution, ensure to talk about what you’re doing every step of the way. This is difficult starting out, and requires practice. For this reason, it is extremely important to think out loud and to have a running dialogue in your head while you are practicing DSA problems to get into the habit of talking through your thought process.

**Here is a list of steps to follow whenever doing a technical interview:**

1. Ask intelligent clarifying questions: for _this_ input, do I get _this_ output? Your goal should be to really understand the problem.
2. Build your set of 2-3 _comprehensive_ test cases. Consider edge cases out loud and how to handle them. Write the cases out so you don't forget.
3. Now that you know your program's desired behavior, think through 2-4 algorithms to solve the problem. Always start with the dumbest brute-force algorithm and gradually improve on it by recognizing places you're wasting computation. Brainstorm things you know like dynamic programming, visualizing the problem as a graph/tree, etc. In the worst case, you have 1 dumb, brute-force algorithm that you can technically implement.
4. For each of your 2-4 algorithms, list next to them their expected time and space complexities. Optionally, note their simplicity/readability as well. Make sure to list out all relevant parameters before you say anything like "this is O(N)!"

<table>
  <tr>
   <td>
<strong>Algo</strong>
   </td>
   <td><strong>Time</strong>
   </td>
   <td><strong>Space</strong>
   </td>
   <td><strong>Simple?</strong>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>O(n^2)
   </td>
   <td>O(1)
   </td>
   <td>yes
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>O(n)
   </td>
   <td>O(n)
   </td>
   <td>maybe
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>O(log n)
   </td>
   <td>O(n^2)
   </td>
   <td>eh?
   </td>
  </tr>
</table>

1. Compare and contrast the algorithms out loud, taking into consideration all of the parameters you've laid out. Consider: code length, time limitations, system capabilities (what's the I/O bandwidth?), and your own ability/confidence in writing out the solutions in full. If you expect you won't have enough time to finish one solution, ask if it's okay to modularize some functionality out and finish later if you have time once you finish the main algorithm. Only commit to one approach after consulting your interviewer for their preference (if they have any).
2. Important: sketch out exactly how exactly you're going to implement your chosen solution. Anticipate what methods you're going to need, their signatures, runtimes and input/outputs. This is better than getting deep into your solution and realizing that one code segment is better off being modularized for cleanliness/usability, or realizing that another solution is better entirely. Example: Given a binary tree, print out all paths that sum to a given target value. You might think to use BFS here, but DFS is better because then you can just print out the values of the nodes when your recursion propagates back ui rather than keeping auxiliary data structures to track your paths.
3. Start implementing your solution in code. Don't make them ask you to do this. This should be ~5 minutes into the interview now. If one segment of code is going to take a significant chunk of time and isn't part of your main algorithm, offload it to another method, assume it'll work and tell the interviewer you'll implement it later if you have time, then continue. Your main algorithm is the main priority.
4. If you get to this point, immediately run your algorithm on 1-2 of your test cases. There's no need to run line-by-line, just make sure it works - it's great if you catch your own mistakes here, so that the interviewer sees that you're self-righting.
5. Ideally by this point, your code is clean, modularized and ready-to-run. But if it's not, scan it now for readability, runtime, etc. and speak your thoughts.
6. The interviewer should be satisfied now, and will likely ask if you have any questions. Ask questions you're genuinely curious about - remember, there’s always something you can glean from engineers with experience as an incoming tech professional.

## What to Practice and Where to Find Questions

One of the best ways to practice technical questions is through LeetCode. LeetCode is a platform with a wide range of DS & A coding questions designed to help people improve their technical skills and to prepare for interviews. Companies often directly ask Leetcode questions, or may give their own version of Leetcode style questions. In any case, it is extremely helpful to spend a considerable amount of time practicing these questions. LeetCode also has “Company Tagged” questions available for premium users, indicating the most frequently seen questions from interviewees. If you can’t find a list of “tagged” questions online, consider asking a friend who has LeetCode premium or paying for it yourself if you can afford it - while $35 is a lot up front, having a list of questions you may see in your interview can be the difference between landing an offer and getting rejected.

If you don’t know where to start, [Neetcode.io](http://Neetcode.io) is a website with “roadmaps” for each common data structure and algorithm, providing a structured list of common interview questions to master each concept. There is also a standard list of questions called [Blind 75](https://leetcode.com/problem-list/oizxjoit/) which covers a wide range of the most common interview questions you might see. LeetCode has its own version of this list called the LeetCode 75. There are also versions of these lists with 150 questions. Completing these lists will cover 90% of the topics you’ll see in real interviews. You can’t go wrong with any of these lists, so pick one and go crazy.

Another resource for technical interview prep is Cracking the Coding Interview (CTCI), a popular guide for DS & A software engineering interviews with lots of practice questions. If you prepare paper and pencil, you can buy this book, but Leetcode is sufficient.

Finally, for harder problems, you can use [CodeForces](https://codeforces.com). This is the platform used by competitive programming competitions, and is a great way to seriously build your skills.

## How to Practice

Preparing for technical interviews requires consistent and structured practice. A helpful approach is to set time limits depending on the difficulty of the problem: around 30 minutes for easy questions, 45 minutes for mediums, and 60 minutes for hards. If you can’t get the solution within that time, look it up and then implement it yourself to make sure you understand the approach.

A good strategy is to talk out loud or to have a running dialogue in your head when solving these problems to mimic the real interview. Remember, you are trying to optimize for interviews, not for getting the solution as fast as possible.

Spaced repetition is also important when practicing technical problems. You can track completed problems in a Google Doc or spreadsheet, and based on your comfort, you can revisit the same problem after a certain amount of time. Re-solving a problem helps reinforce the pattern needed to solve it, and ensures you actually understand the concept rather than the plain solution. If you are comfortable with a problem, revisit in 1-2 weeks, if you are iffy, revisit it in a week, and if you were lost without the solution, revisit it in 3-4 days.

We recommend doing interviews in **Python**, since common operations such as iterating, counting, sorting, and manipulating strings/arrays can be done extremely quickly, and the language syntax is very simple. But, regardless of which language you choose, you should be grinding Leetcode easy/medium questions for at least one month before your interview to maximize the patterns you’ll recognize during the real thing. Ideally, you should start solving LeetCode questions three months before you anticipate having interviews - this means starting as soon as you apply in June.

After grinding problems, it is extremely important that you do as many mock interviews as you can. Ask your mentors, your friends, or find experienced upperclassmen (**Hint**: the CSL and USACS are 2 amazing resources for this) to mock interview you. Other options include using AI voice tools such as ChatGPT voice or using platforms such as [pramp.com](http://pramp.com), and [interviewing.io](http://interviewing.io), which match you up for mock interviews with real engineers, though these resources are paid.

As a final note on this type of technical interview, practice problems together with your friends! It is much easier to motivate yourself and you’ll get better practice by engaging with these problems with others.

# Technical Interviews - System Design

A system design interview is an interview where you’ll be tasked with coming up with an architecture for some sort of application. For instance, you might be tasked with building out the system design for a new parking garage app powered by AI. System design interviews are all about making assumptions and doing “back of the napkin” math, so you’ll be asking a lot of questions, gathering requirements, and then using what you know to build a system that fits the needs of the problem. To do this, it is important that you understand the different components that go into creating scalable systems. Distributed Systems is a great class to take for this (or if you’re into this kind of stuff), but there are plenty of resources online such as _[System Design Interview, An Insider’s Guide](https://bytes.usc.edu/~saty/courses/docs/data/SystemDesignInterview.pdf)_, this [tutorial](https://www.youtube.com/watch?v=m8Icp_Cid5o), as well as plenty of mock [interviews](https://www.youtube.com/watch?v=_UZ1ngy-kOI) on Youtube.

Here is a general guide to approaching these problems:

1. Once you are given the problem, ask clarifying questions about the problem itself to make sure you fully understand it and to gain new information, as the problems are intentionally vague
   1. Ask what sorts of features to support ( and figure out what operations in the database they correspond to )
   2. Learn hard numbers - maximum # of reads vs. writes (or read to writes ratio), the read/write throughput, the size of reads/writes (you’ll likely need to estimate this)
   3. Figure out the API for the problem - is there a POST route to add new entries? A GET route to read entries? etc.
2. Create a high level system design diagram. Make sure not to forget about any aspects of the problem and Talk through each part of the diagram and its purpose
   1. For instance, you might explain that you are adding a cache in front of your DB in order to improve read speeds because the problem has 100:1 read to write ratio
3. If there’s time left and the interviewer isn’t satisfied, add more detail and talk through changes in your diagram

These types of interviews are less common for internship and new grad roles, but they are still given. Make sure you ask your recruiter and find information online about your interviews to ensure you prepare appropriately.

# Data Science Interview

For data science internships, the technical interview mostly consists of questions that test your knowledge and understanding of Machine Learning and Artificial Intelligence topics. For instance, an interviewer may ask: What are the assumptions required for linear regression? How do you split data sets when training a model?

As a result, it is important to have a strong understanding of key ML and data science concepts. For instance, you should know k-means clustering, regression, classification, unsupervised vs supervised learning, bias vs. variance, fundamental neural network knowledge, and more. The interviews typically focus less on coding and more on extensive behaviorals and conceptual questions about your knowledge.

In addition to questions that test your knowledge and ability to apply your knowledge, case studies are also very common. The industry is moving towards these more due to the rise of unauthorized AI use. These tend to be very high level, and they want to see how you think, similarly to a typical DS&A interview.

One example of a case study is that given some data, you may be asked to come up with some stance based on trends you derive from the data. Then, once you develop a stance and walk through your thinking with the interviewer, they may provide you with more data or information and ask how your way of thinking changes. Here is an article [discussing](https://capd.mit.edu/resources/ace-the-data-science-technical-interview/) preparing for the data science interview. Just like always, use google to find more practice problems and grab a friend, mentor, or AI assistant to do mock interviews with.

## The Offer

Receiving an offer is the final stage of the interview process and a great position to be in, but it can also come with important decisions. Make sure you carefully review the details of the offer, including compensation, location, start date, team placement, and any deadlines for accepting. If anything is unclear, do not hesitate to ask the recruiter for clarification. It is also normal to take some time to think through the decision before responding, especially if you are waiting to hear back from other companies.

## Navigating Multiple Offers

If you receive multiple offers, compare them based on factors that matter most to you, such as learning opportunities, mentorship, team culture, location, and the type of work you will be doing. Compensation is important, but especially for internships and early career roles, the experience and skills you gain can have a much larger impact on your long term growth. If you need more time to decide or are in the interview process with other companies after receiving an offer, it is generally acceptable to politely ask recruiters if the offer deadline can be extended while you finish other interview processes or weigh your options. Being transparent and professional throughout the process will help maintain good relationships with recruiters and companies.

_Please let us know if anything is broken, needs to be updated, or if you have any feedback [here](https://forms.gle/Z9dsta8Hy4awvK2z5)._
