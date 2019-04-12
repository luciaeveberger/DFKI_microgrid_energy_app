# ROR-DFKI

Development Platform for the DFKI ROR.

Development is being performed out of the iMode project as it has the code infrastructure necessary. 

Api Documentation is located in the api repository 

Please contact @lucia-eve for the schema updates 



### iMODE project, 

```bash 
cd heroku-upload 
bundle install && rake db:setup && rails s
```


## Code organization 

### Angular :


Angular component built out of the app.js file within the ruby assets pipeline, they are served through this conduit. 


### Ruby API: 

Built out of the 'api/namespace'


### API documentation on port 3007 

```bash 
cd api 
bundle install && rails s -p 3007

```

To run both ruby projects, you need to specify the port. 

### For Data Schema sheet 
https://my.vertabelo.com/model/sXp8V6wCfxWg5nwE6RlWmrOEvRr80fXZ


### For Java-Spring (matlab simulator connection)

See other repo. With post receipt.

```cd gs-rest-service && mvn clean package``` 

```java -jar build/libs/gs-rest-service-0.1.0.jar```




