# Pagespeed Insights
Script to run the Google pagespeed insights api and record the performances in the CSV format.

## Description

### Installing
```
git clone git@github.com:rcbcool/pagespeed-insights.git
```
cd pagespeed-insights/
```
npm i
```
  
### Executing program
* ```
  cd pagespeed-insights/
  ```
* Update the domains in multiple lines in the file - **_urls.txt_**
  ```
  https://www.domain1.com/en/
  https://www.domain2.com/en/
  ```
* Then run the command inside the root folder
  ```
  node ./index.js
  ```
* This should then have the insights recorded for both Desktop & Mobile in the CSV file - **_domain-insights.csv_**
  ```
  URL,Performance Score,Accessibility Score,Best Practices Score,SEO Score,PWA[Progressive Web App] Score
  https://www.domain1.com/en/[desktop],88,82,100,75,29
  https://www.domain1.com/en/[mobile],71,82,100,79,38
  https://www.domain2.com/en/[desktop],88,82,100,75,29
  https://www.domain2.com/en/[mobile],71,82,100,79,38
  ```
  
