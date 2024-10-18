import React from 'react';
import './blogpost.css';

const BlogPost = () => {
  const post = {
    title: 'Mental health awareness: The importance of conversation',
    image: 'img/mental-health-awareness-man-next-to-window.webp',
    content: `
      It's impossible to have a conversation about health and wellness without talking about mental health. In the United States, nearly one in five adults have a mental illness or mental health condition. That's nearly 52 million people.

However, mental health isn't just about having or not having a mental illness. Our well-being is affected by all aspects of our lives, and that, in turn, affects how we experience life, work, and time with our loved ones. Now, the conversation is more critical than ever. In 2021, the prevalent feeling of the year was languishing. BetterUp’s research found that more than 55% of workers weren't mentally ill, but they weren't thriving either.

As the pandemic has brought physical health center stage in an unprecedented way, it's time to look at the other major components of well-being. The conversation around mental health awareness has never been as public, as prevalent, or as important. After all, building awareness is a critical ingredient to learning how to care for your mental health. 

Learn what mental health awareness is and how it makes a difference in your personal and professional life in this article. 
So what does mental health awareness mean, and how do you promote it?

Mental health awareness is the ongoing effort to reduce the stigma around mental illness and mental health conditions by sharing our personal experiences.

Often, because of misconceptions about mental health and mental fitness, people often suffer in silence and their conditions go untreated. Mental health awareness is an important social movement to both improve understanding and increase access to healthcare.    
`,
title2:'Why is mental health awareness so important?',
content2:`Mental health isnot just a conversation for people dealing with mental health disorders. It impacts our social, emotional, physical, and cognitive well-being. Unfortunately, many people don't receive the treatment that they need because of the stigma associated with mental health. Some don't even realize that treatment is available. When these people suffer quietly, they feel lonely and disenfranchised.  We miss out on their brilliance. Every year, suicide is one of the top three causes of death in the United States. And it's been on the rise in recent years. This is true for all economic classes, ethnicities, and genders, although some groups are at a markedly higher risk.

Every suicide is a tragedy. Death by suicide comes at a high cost. Not only does it warrant financial losses it’s, more importantly, devastating for the survivors of the person who died.

We never truly know how our actions impact another person, but if raising awareness can save a life, it is a truly worthwhile endeavor. `
  };

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} className="blog-image" />
      <div className="blog-content">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <h3>{post.title2}</h3>
        <p>{post.content2}</p>
      </div>
    </div>
  );
};

export default BlogPost;
