## Follow these steps for installation and running the application from your laptop

#### 1. Installing homebrew (For Apple Macbooks)

Install homebrew to further download necessary frameworks to launch the app https://brew.sh

#### 2. Install Git to download the project from internet/GitHub

After having downloaded homebrew you can run this command in your terminal to download git:
brew install git

https://git-scm.com/download/mac

#### 3. Clone the repository project

Paste this in your terminal:
```sh
git clone https://github.com/AlexanderJarvheden/DD1367-Software-Engineering-in-Project-Form.git
```
Otherwise use link https://github.com/AlexanderJarvheden/DD1367-Software-Engineering-in-Project-Form and press the big green button
"<> Code" and copy the HTTPS link and then enter:

```sh
git clone <the link you have copied>
```

#### 4. Enter the locate the repository in the terminal

You should enter the project by entering:
```sh
cd DD1367-Software-Engineering-in-Project-Form
```
#### 5. Install necessary scripts inside the project

After having completed step for enter:
```sh
cd client
npm install react-scripts react-konva
npm run build
```
There might show up a lot of messages with a bunch of terms "is defined but never used" which is to be ignored since it just
has to do with developers not having optimized the code.

Now you must install things outside of the client folder by entering:

```sh
cd ..
npm install cors bcrypt pg uuid
```

#### 6. Launch the app

Hopefully everything has gone right and then it is time to enter:

```sh
npm start
```

Which if running successfully should display a message with 
```sh
Server running on http://localhost:3000
```
and now the app can be tested by entering that link in your favourite browser.