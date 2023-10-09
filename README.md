![VSA-1](https://github.com/ShaunHaldane/Haltern-am-See-Visitor-Suggestion-App/assets/58984410/d0873554-9f83-4469-aad1-311fa044e8df)


There are many places that I have visited with my disabled brother where I had to really pay attention to his every movement in case he fell over. You see, my brother cannot balance very well due to him having a severe brain injury. He does not have any control of his right arm due to spasticity and his walking pattern is severely distorted. When we are deciding on a place to visit in our free time we usually cannot really tell if the conditions are completely accessible to someone like my brother. Sure we can find information about wheelchair accessibility but what about the conditions for people with other disabilities? 

Me, my wife and my brother bought a house in Haltern am See in 2018. We converted the upper floor into the first fully accessible disabled friendly holiday flat in Haltern am See. We have had guests with varying disabilities staying in our flat. Generally they would ask for recommendations about suitable places to visit. I thought that instead of listing a bunch of places to them it would be cool to provide an app in which they could select their interests and disabilities from a list and have the app recommend every suitable place in Haltern am See to them.


## Requirements

This app:

- Shows a directory of accessible places according to disability which the user can select from a list.
- Allows the user to create an account if they visit Haltern am See with a group. Each person in the group can select their interests and disabilities and the app will recommend places to visit which are suitable for the entire group.

The Project

Figure 1 is the database design of the Visitor Suggestion App. To keep user details secure I created a role based authentication system using JWT. Each user has a one to many relationship with visitor because a user can represent a group or family which can have many visitors. Each visitor and place has a one to many relationship with comment because each visitor can leave many comments and each place can have many comments. Each visitor and place has a many to many relationship with interest and disability.  

<p align="center">
  <img src="https://github.com/ShaunHaldane/Haltern-am-See-Visitor-Suggestion-App/assets/58984410/19652375-72d8-4365-b1a7-89745268ffcc" />
  <p align="center"> <i>Figure 1: ER-Diagram of Visitor Suggestion App.</i>
</p>


As an admin I can add or remove categories as shown in figure 2.

<p align="center">
  <img src="https://github.com/ShaunHaldane/Haltern-am-See-Visitor-Suggestion-App/assets/58984410/4a0e95f0-9336-4ad7-bacb-faac6449453b" />
  <p align="center"> <i>Figure 2: Add/Remove Interests and Disabilities Screen for Admin.</i>
</p>


I can also add, remove and edit places. A list of places as they appear on the admin screen are shown in figure 3.

<p align="center">
  <img src="https://github.com/ShaunHaldane/Haltern-am-See-Visitor-Suggestion-App/assets/58984410/4a2240ce-4b91-436c-8717-a4bb3b29c20f" />
  <p align="center"> <i>Figure 3: List of Places from Admin Screen.</i>
</p>


The user can add visitors using the screen shown in figure 4. Joe is interested in history and he has no disabilities.

<p align="center">
  <img src="https://github.com/ShaunHaldane/Haltern-am-See-Visitor-Suggestion-App/assets/58984410/d6a0d323-71e2-483f-9c08-ac68f6cf5a6b" />
  <p align="center"> <i>Figure 4: Add Visitor Screen.</i>
</p>


For demonstration purposes I have added two attractions to the app. Annaberg is the highest hill in Haltern am See with a church called St. Anna Kapelle near the top. Both the hill and the church have great historical value. The church is fully accessible to anybody but the rest of the hill would be extremely difficult for someone in a wheelchair to embark. If Joe from the example above was to visit Haltern am See alone, the app would suggest both the church and the hill to him. However, if Joe took someone in a wheelchair with him as illustrated in figure 5 then the app would only recommend they visit the church along with any other attractions suitable for people in a wheelchair.  

<p align="center">
  <img src="https://github.com/ShaunHaldane/Haltern-am-See-Visitor-Suggestion-App/assets/58984410/c9903d0c-2c14-4ec3-a7b4-457325b01b7e" />
  <p align="center"> <i>Figure 5: Example of User/Family Profile.</i>
</p>


Anybody is welcome to use the directory in which all places are filtered according to disability as shown in figure 6.

<p align="center">
  <img src="https://github.com/ShaunHaldane/Haltern-am-See-Visitor-Suggestion-App/assets/58984410/bf159de0-3a04-4840-af61-fac19b310056" />
  <p align="center"> <i>Figure 6: Public Directory Filtered by Disability.</i>
</p>



## Conclusion

I have built an app to help visitors to Haltern am See with various disabilities find suitable places to visit based on their interests and disabilities. The app has not been live for long enough to have made any impact on visitors to Haltern am See yet but I hope that it will help someone in the future navigate around this town.
