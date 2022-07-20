x = """What geometric shape is a stop sign?
Square
Triangle
+Octagon
Pentagon
What was the most downloaded app in 2021?
BeReal
+TikTok
Instagram
Snapchat
What did Kylie Jenner name her baby?
Raini
+Stormi
North
Moon
When did Whole Lotta Red by Playboi Carti get released?
Dec 25, 2021
+Dec 25, 2020
Dec 31, 2021
Dec 31, 2020
Which artist boycotted the Grammys after being snubbed in 2021?
+The Weeknd
Drake
Travis Scott
Post Malone
What was Olivia Rodrigos debut album titled?
+Sour
Sweet
Angsty
Bitter
Artist Kanye West changed his name to?
+Ye
Yeezy
Yeezus
Kanye
With a return to in-person learning, many second year professors noticed class averages ?
+Decreased
Increased
Did not change
Increased Significantly
What programming language is commonly used in front-ends?
+JavaScript
HTML
CSS
PHP
Which prominent rapper now identifies as they/them?
+Lil Uzi Vert
Lil Baby
Lil Wayne
Lil Durk
An obsessive fan maybe called ___ on twitter?
+Stan
Super fan
Big fan
Fan
Johnny Depp vs ___  dominated headlines in 2022?
Aubrey Heard
+Amber Heard 
Amber Bird
Amber Drake
Popular new social media platform where users can only post at certain times?
+BeReal
TikTok
Instagram
Snapchat 
Which artist has a large female following?
+Mitski
Bladee
Lil Durk
Young Thug
Which fast fashion retailer has exploded in popularity in the 2020’s?
H&M 
Zara
+Shein
Uniqlo
Who got cancelled first?
+Travis Scott
Harry Styles
Girl in red
Charlie XCX
Whose fans complain about vinyl delays, infrequent releases, and limited public appearances?
+Frank Ocean
Tyler, the Creator
Billie Eilish
The Weeknd
Which artist dropped their deluxe 5 years after their album released?
+SZA
The Weeknd
Conan Grey
Taylor Swift
In a dispute with their label, this artist is in the process of rerecording their early albums.
+Taylor Swift
Drake
Future
Arctic Monkeys
Which Canadian brand was featured in a prominent TikTok trend in 2022?
+Arc’teryx
Reigning Champ
Lululemon
Shoppers Drug Mart
Melina Pants and Superpuffs.
+Aritzia
Lululemon
H&M
Shein
Second hand clothing app, popular among zoomers.
+Depop
Ebay
Kijiji
Etsy
Controversial feature on Mr. Morale & the Big Steppers
Kendrick Lamar
+Kodak Black
Kanye West
K dot
NBA 2022 champions
+Golden State Warriors
Toronto Raptors
Milwaukee Bucks
Huston Rockets
2022 NBA Rookie of the Year
+Scottie Barnes
Draymond Green
Pascal Siakam
LaMelo Ball
This popular twitch emote was changed in 2020
+Pogchamp
Pepehands
Sadge
Omegalul
___ jeans are coming back in 2022
+Low rise
High waisted
Boyfriend
Skinny
When a reply gets more likes than the original tweet?
+Ratio
Radius
Radio
Patio"""

def main():
    list = x.split("\n")
    c = 0
    end = ''
    p = '['
    for line in list:
        if c % 5 == 0:
            p+=end
            p += '{\ntitle: "'+line+'",\noptions: ['
        elif line[0] == '+':
            p+='\n{  title: "'+line[1:]+'", correctFlag: true},'
            end = '\n],\n},\n'
        else:
            p += '\n{  title: "'+line+'", correctFlag: false},'
        c+=1
    
    print((p+end)+ ']')

if __name__ == '__main__':
    main()