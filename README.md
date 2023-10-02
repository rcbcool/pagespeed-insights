# Pagespeed Insights
Script to run the Google pagespeed insights api and record the performances in the CSV format.

## Description

### Installing
* Clone this git repo
* cd pagespeed-insights/
* npm i
  
### Executing program
* ```
  cd pagespeed-insights/
  ```
* Update the domains in multiple lines in the file - **_urls.txt_**
* ```
  https://www.absoluthome.com/en/
  ```
* Then run the command inside the root folder
  ```
  node ./index.js
  ```
* This should then have the insights recorded for both Desktop & Mobile in the CSV file - **_domain-insights.csv_**
```
URL,Performance Score,Accessibility Score,Best Practices Score,SEO Score,PWA[Progressive Web App] Score
https://www.absoluthome.com/en/[desktop],88,82,100,75,29
https://www.absoluthome.com/en/[mobile],71,82,100,79,38
```
  
