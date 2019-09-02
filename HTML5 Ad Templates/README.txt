Created by Kevin He (https://kevinhe.work or @kevinhe.png) on 08/15/2019 for the Khoros marketing design team. If you have any questions, concerns, or just miss me :'( you can text/call me at my phone number: 214-714-2073


Special thanks to Jess Ellis, Annielyn Felux, Vic Rodriguez, Victoria Squire, Beau Hinton, and Nathan Stull for their guidance, help, and teaching. 
Much love to Diego Medua, Grace Ebel, Kenzie Walker, Michele Kish, and Annika Larson for making me part of the best intern squad ever. 

This project would not have come to life without them and their support <3.



Last Updated: 08/15/2019
---------------------------------------------------------
HTML5 Display Ads for Google Version 1.0 - 08 AUGUST 2019
---------------------------------------------------------

<<INTRODUCTION>>

	From a small comment made by Jess around 4th of July about how she wanted to have ads that had more motion and interactivitiy in them, this project began as an independent study and exploration that I delved into on my own in my free time. I wanted to experiment and hone my HTML and CSS skills, so I began this project as just a way to do some practice and trial and error. However, as I dug deeper and deeper into both my code and the internet, I realized that "Hey, this is actually doable — I can actually make this a reality." And thus Pandora's Box was opened. I began to dig deeper and deepeer into HTML, CSS, and jQuery in order to see how I could push this animated ad state as far as I could with only a semester's worth of front-end development. This project has now become the magnum opus of my time here at Khoros, and I hope it can continue to develop and grow under more designers.

<<PURPOSE>>

	This document's purpose is to serve as a guide and a resource towards helping you understand and use the HTML5 display ads that I coded out during Summer 2019. If this isn't your cup of tea, just read the summary of what you need to change in the ads or just go download Google Web Designer (seriously, it's sick). 


	Before we begin, here's a few links to get you started on some basic HTML, CSS, and JQuery:
		1) HTML5 Tutorial-> https://www.w3schools.com/html/default.asp
		2) CSS Tutorial-> https://www.w3schools.com/css/default.asp
		3) JQuery Tutorial-> https://www.w3schools.com/jquery/default.asp

	With these basic knowledge in hand, you should probably go ahead and install a text editor to edit and view the HTML and CSS outside of Inspect mode. I highly recommend Sublime. It's free and light and has a great dark mode and can pretty much edit any code that you'll be encounter. Now, I'll walk you through the HTML5 folder and what's going on in the folder set up.

	Within this folder are 6 different folders named after the size of each display ad. These sizes are the most common display ad request sizes that the Khoros design team receives from demand gen. Within each size folder, there's three items: the index.html file (the "content/backbone"), the styles.css file (the "design"), and an images folder (for the logos). The only two we're going to worry about here are the html and the css files.

<<HTML>> 

	The HTML files serves as the mainframe and engine of the display ads. This is where the clicktag and associated link are, the body copy of the ad, the Khoros logo, CTA button, pattern, and animation sequence reside and are referenced.

	Below are some common cases of things you're most likely going to do here.
		-If you want to change copy for example, you would do so here.
		-There's a request for the CTA to be updated.
		-You want to change the pattern to a Starling or Ripple.

	Now, these sublevels are all grouped together in div's that control the whole group. If you need to change them, you can look for them in their div level content. So, if you need to change the copy of the CTA, look for the div="cta" and it will be within the group.

	You can also use the spans to change the color of the text within the copy. You will just need to change the name of the span to the name of one of the Khoros colors. Currently, there's only the accent colors built in but more can be added as needed within the CSS.

	Within the head of the HTML document lies all the stuff that happens behind the scenes. This is where you need to link fonts, jQuery, and the CSS file in order to get things to work and display properly. You mostly wont change anything here other than changing the "var clickTag" destination script that'll be attached to your CTA button. The place that'll most likely be changed will be the script that controls the jQuery animation as I've noted in the code. You can increase/decrease the duration (in ms) here at "var duration" Once you feel comfortable (or explorative!) you should go ahead and try and play with the .animate states and see how you can push/evolve the animation!

	At the very bottom of the HTML doc is where the pattern is. This pattern has been placed as a string of SVG code that draws out the vector graphic within the HTML document. You can get a new string of SVG code in Adobe Illustrator from your pattern/graphic once you export it as an SVG and grab the code there. This video (https://www.youtube.com/watch?v=y0Ic8QcvyK8) does a really good job describing the process of how to export SVG code from an Illustrator graphic as well as how to do the SVG animation (comes up later in the CSS section).

<<CSS>>
	
	This where the real fun stuff begins. This is most likely going to be place that you play around with the most. Before you begin, first you should open up your index.html file of the associated styles.css file you're going to be working on in Google Chrome. Next, right click the ad and go to "Inspect" Here, you'll be a doing a lot of testing and playing on individual div level content that will automatically preview the changes and edits you'll be making. 

	Now, within the CSS is where you'll be changing the positioning and appearance of the content. You can change font sizes, line heights, and the positioning and padding of all the objects. I would highly recommend reading this (https://www.w3schools.com/css/css_boxmodel.asp) to learn about the CSS box model and how positioning and placement works. I won't go into super detail about the different levers that you can pull to change things within CSS (since I personally don't even know all of them) but you will most likely be changing font sizes, margins, paddings, rotations, and widths/heights. Once you become more skilled/comfortable at making and using HTML/CSS, I would highly encourage you to take the code I've already made and try to redesign a new ad from scratch! It'll teach you a lot about how to position and work things around in the ad space you're given.

	At the bottom, you'll see some code that's editing the SVG pattern/path. You want it to edit the SVG here. You can change the color of these strokes with a hex code. You can just copy paste one from the CC library or from the spans above with the color library. Here's where the animation state for the pattern reveal is. You can control it by calling the animate function and creating respective keyframes for it. It's pretty complicated so I'm linking you back to w3schools again since they do a better job of explaining it. If you're still confused, Google is your best friend and can help you troubleshoot pretty quickly what's breaking/going on. If you need help with stroke-dasharray, I really have no clue what is does. I got it from the SVG animation video (https://www.youtube.com/watch?v=y0Ic8QcvyK8) which does a way better way of explaining how you use it. 

<<CONCLUSION>>

	I hope this guide helps explain my process and gives you, the reader, a better understanding of what's going on within the HTML/CSS code and how you can best utilize it to make animated display ads for Google and Khoros. When you feel like you're done with an ad state (or many!), be sure to view the 6Sense HTML5 Specs pdf in the folder. It'll tell you how to check if your ad is compliant with Google's requirements through a web tester as well as give you a better sense of what sort of design specifications/modifications you need to make. If everything checks off and things go well, you'll want to select the sized folder and compress it to a ZIP file. This specific zip file will be one that you send over to demand gen to give to 6Sense or Google to make your ads live! 

	And now, congrats! You've made your first set of animated display ads! I'm so proud of you :) Now, its time to keep on exploring and seeing how far you can push the animation, design, and aesthetic of these ads yourself!

	If you have any questions, comments, or concerns, please be sure to email or phone me! I would be more than happy to chat and re/connect with any of you regarding this. My email is kevinhexls@gmail.com and my phone number is 214-714-2073. Best of luck out there and be sure to save often! Kevin out~

