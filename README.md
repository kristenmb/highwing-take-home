<img width="102" alt="Screen Shot 2021-04-15 at 10 14 02 PM" src="https://user-images.githubusercontent.com/69478485/114970557-e6f2e500-9e37-11eb-9ab4-21021ebc9e65.png"> 

## Highwing Take Home Challenge

Completed by Kristen Bair 

## Description
A comparision of coverage summaries. On the left, all businesses a selected broker represents and on the right, the subset of that business that the selected carrier currently has. Charts are interactive, and as a User clicks each value displayed in the chart legend, the premium and percentage of that premium will dynamically change on the dashboard. 

![](https://media.giphy.com/media/Z0NzF8Q7D0xOpEtcFF/giphy.gif)

[Built off of this comp](https://projects.invisionapp.com/share/RWXOGR6E7AT#/screens/421418913")


### Planning
- After recieving the prompt, I read through the expectations, took notes and examined the comp. 
- I created a few diagrams separating the comp into proposed components.
- After re-reading the prompt, I submitted clarifying questions.

### Implementation 
- After having my clarifying questions answered, I began working on the prompt by building out the expected components and installing the packages I thought would be needed. 
- Next I wanted to be sure I could access the data from the provided API so I implemented Apollo Client and created my graphQL queries.
- Once I had access to the data I worked on implementing the Chart.js library which I had never used with React before. I found the documentation difficult to follow as it hasn't been updated well for how the package works with React. 
- After tackling most of the functionality I switched gears and worked to get the styling closer to the comp. 

### Resources
- [Apollo Client](https://www.apollographql.com/docs/)
- Provided graphQL API built in documentation
- [Chart.js](https://www.chartjs.org/docs/latest/)
- [Doughnut Label Plugin](https://www.npmjs.com/package/chartjs-plugin-doughnutlabel)

## Technologies
- React
- Apollo Client
- GraphQL API
- Chart.js
- CSS

## Future Iterations
- There is one final piece of functionality that I did not complete. When clicking legend items the styling of the legend does not change. I had trouble finding the property that needed to be adjusted. I attempted to manipulate the className on click but didn't find any luck in that. 
- There is an occassional warming that pops up in the console when too many refreshes occurf. It reffers to the memory caching from Apollo. I did some breif reading on the topic and learned that the memory is trying to resolve conflicts with the new data having conflicting information. There was a potential solution I saw that referred to implementing an id on each call but I did not have time to investigate that further.
- Had I had time, I would have worked to separate some of the data maniputaion and "extra bits" into a utils file to clean up the components slightly - mostly in the InfoCard component with some of the peices used for the Doughnut data.
- I considered making a single graphQL query and grabbing all the data I needed, but I am new to graphQL and experimented a bit with the different calls. I think the separation made sense for how I built out the page, but could also have been done with a single query.
- One final piece I struggled with for a while was getting the premiums to re-format as currency (with commas). I was able to make `new Intl.NumberFormat().format(number))` work in separate sandboxes but not within my code. I think I was close to sorting this out, but couldn't quite make it work. 

## To View
1. Clone or fork this repository to your local machine
2. Run `npm install`
3. Run `npm start`
4. Visit `localhost:3000`
