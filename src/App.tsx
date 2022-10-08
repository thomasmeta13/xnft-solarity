import ReactXnft, { Text, View, Image, useNavigation, Svg, Path, Tab, Stack, List, ListItem, TextField, Iframe, Button } from "react-xnft";
import React, { useState } from "react";
//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});
const iframeLinks = {
  gallery: "https://solarity-frontend.vercel.app/iframe/joinModal/gallery",
  plaza: "https://solarity-frontend.vercel.app/iframe/joinModal/plaza"
};
export function App() {
  const [iframeToggle, setIframeToggle] = useState(1);
  const [iframeSrc, setIframeSrc] = useState("");
 
  const createRoom = (type) => {
    setIframeToggle(0);
    setIframeSrc(iframeLinks[type]);
  }
  return (
    <View>
      {iframeToggle == 0 && (
        <View className="App" style={{ background: "linear-gradient(to bottom, #131314 70%, #090500"}}>
        <View style={{ backgroundColor: "#131314", display: "flex", padding: "8px", borderBottom: "1px solid #1D1F1F" }}>
          <Image src="https://solarity-new-frontend.vercel.app/_next/static/media/logo.03981c37.svg" style={{ width: "15%", height: "40px", paddingLeft: "10px" }} />
          <Text style={{
            textAlign: "left",
            top: "50%", transform: "translateY(20%)", paddingLeft: "10px"
          }}>SGN</Text>
        </View>
​      <View style={{marginBottom:"34px", marginTop:"-7px"}}>
      <Button style={{
        marginLeft:"20px",
        paddingRight:"150px",
        paddingLeft:"-150px",
        width:"335px",
        marginTop:"-20px",
        border:"1px solid #272829",
        background:"#131314"
      }}><Text style={{marginLeft:"-130px", fontSize:"13px", color:"#929298"}}>Search</Text>
      </Button>
      <View style={{marginLeft:"320px", marginTop:"-32px", position:"absolute", top:"1"}}>
      <Svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><Path  d="M8 16C11.866 16 15 12.866 15 9C15 5.13401 11.866 2 8 2C4.13401 2 1 5.13401 1 9C1 12.866 4.13401 16 8 16Z" stroke="#474749" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></Path><Path d="M17 17L15 15" stroke="#474749" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"></Path></Svg>
      </View>
      </View>
        <View style={{
          background: "",
          textAlign: "center",
          margin: "20px",
          height: "170px",
          borderRadius: "10px",
          border: "1px solid #272829",
          position: "relative",
          top:"-30px"
        }}>
          
          <Iframe src="https://solarity-frontend.vercel.app/frames/ownroom0" style={{left:"0px", borderRadius:"10px"}}/>   
          <View style={{
            backgroundColor: "#162724",
            marginLeft: "39%",
            marginRight: "110px",
            textAlign: "center",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            border: "0px solid white",
            position: "absolute",
            padding: "3px",
            top: "0px",
            left:"5%"
          }}>
​            
            <Text style={{
              padding: "3px",
              textAlign: "center", color: "#29B080", marginTop:"-30px", fontSize: "13px"
            }}>Room</Text>
          </View>
        </View>
        <Text style={{
          color:"#29B080",
          marginTop:"-40px",
          marginLeft:"20px",
          fontSize:"17px"
        }}>Solarity Room</Text>
          <Text style={{
          color:"#29B080",
          marginLeft:"20px",
          fontSize:"10px",
          textShadow: "-1px 0 black"
        }}>✓ Solarity Collection</Text>
        <View style={{display:"flex"}}>
        <Text style={{
          color:"#929298",
          marginLeft:"20px",
          fontSize:"12px"
        }}>Beautiful and spacious room.</Text>
        <Button style={{
          right:"-25%",
          marginTop:"-35px",
          marginBottom:"20px",
          width:"",
          fontSize:"14px",
          backgroundColor:"#162724",
          color:"#29B080",
          border:"1px solid #29B080"
        }}>50 
        <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Ficons%2Fverse-token.png&w=64&q=75" style={{width:"17px", height:"17px", marginTop:"0px", marginLeft:"7px", marginRight:"-3px"
}}></Image> 
        </Button>
        </View>
        <Text style={{
          margin:"20px",
          marginTop:"10px",

        }}>Top Rooms</Text>
            <View style={{ display: "flex", marginLeft: "15px", padding: "5px", marginTop:"-20px"}}>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F1.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "12px" }}>Temple</Text>
              </View>
​
            </Button>
            <View style={{
              background: "#272829 50%", marginLeft: "15px", padding: "3px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px", display:"flex"
            }}>
              <Text style={{
              fontSize: "9px",
              marginRight:"2px",
            }}>50 </Text>
            <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Ficons%2Fverse-token.png&w=64&q=75" style={{width:"12px", height:"12px", marginTop:"0px"}}></Image> 
            </View>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F0.jpg&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Hexagons</Text>
              </View>
​
            </Button>
            <View style={{
              background: "#272829 50%", marginLeft: "125px", padding: "3px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px", display:"flex"
            }}>
              <Text style={{
              fontSize: "9px",
              marginRight:"2px",
            }}>50 </Text>
            <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Ficons%2Fverse-token.png&w=64&q=75" style={{width:"12px", height:"12px", marginTop:"0px"}}></Image> 
            </View>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829"
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fassets%2Fimages%2Frooms%2Fgallery.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}> Gallery</Text>
              </View>
​
            </Button>
            
            
            <View style={{
              background: "#272829 50%", marginLeft: "240px", padding: "3px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px", display:"flex"
            }}>
              <Text style={{
              fontSize: "9px",
              marginRight:"2px",
            }}>50 </Text>
            <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Ficons%2Fverse-token.png&w=64&q=75" style={{width:"12px", height:"12px", marginTop:"0px"}}></Image> 
            </View>
          </View>
          <View style={{ display: "flex", marginLeft: "15px", padding: "5px" }}>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F0.jpg&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Temple</Text>
              </View>
​
            </Button>
            <View style={{
              background: "#272829 50%", marginLeft: "15px", padding: "3px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px", display:"flex"
            }}>
              <Text style={{
              fontSize: "9px",
              marginRight:"2px",
            }}>50 </Text>
            <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Ficons%2Fverse-token.png&w=64&q=75" style={{width:"12px", height:"12px", marginTop:"0px"}}></Image> 
            </View>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F2.jpg&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Hexagons</Text>
              </View>
​
            </Button>
            <View style={{
              background: "#272829 50%", marginLeft: "125px", padding: "3px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px", display:"flex"
            }}>
              <Text style={{
              fontSize: "9px",
              marginRight:"2px",
            }}>50 </Text>
            <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Ficons%2Fverse-token.png&w=64&q=75" style={{width:"12px", height:"12px", marginTop:"0px"}}></Image> 
            </View>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829"
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fassets%2Fimages%2Frooms%2Fgallery.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}> Gallery</Text>
              </View>
​
            </Button>
            
            
            <View style={{
              background: "#272829 50%", marginLeft: "240px", padding: "3px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px", display:"flex"
            }}>
              <Text style={{
              fontSize: "9px",
              marginRight:"2px",
            }}>50 </Text>
            <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Ficons%2Fverse-token.png&w=64&q=75" style={{width:"12px", height:"12px", marginTop:"0px"}}></Image> 
            </View>
          </View>
      </View>
      )}
      {iframeToggle == 1 && (
        <View className="App" style={{ background: "linear-gradient(to bottom, #131314 70%, #090500"}}>
          <View style={{ backgroundColor: "#131314", display: "flex", padding: "8px", borderBottom: "1px solid #1D1F1F" }}>
            <Image src="https://solarity-new-frontend.vercel.app/_next/static/media/logo.03981c37.svg" style={{ width: "15%", height: "40px", paddingLeft: "10px" }} />
            <Text style={{
              textAlign: "left",
              top: "50%", transform: "translateY(20%)", paddingLeft: "10px"
            }}>SGN</Text>
          </View>
​
          <View style={{
            background: "linear-gradient(to bottom, #874C00 40%, #090500",
            textAlign: "center",
            margin: "20px",
            height: "170px",
            borderRadius: "10px",
            border: "1px solid #272829",
            position: "relative",
            top:"-30px"
          }}>
            <Image src="https://pbs.twimg.com/media/FdxibiXUcAA5l6T?format=jpg&name=medium"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0",
                bottom: "0",
                borderRadius: "10px"
              }} />
            <Image src="https://shangrilaheritage.it/wp-content/uploads/2019/02/shangri-la-heritage-video-passo-crocedomini-shade.png"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0",
                bottom: "0",
                transform: "rotate(180deg)",
                borderRadius: "10px"
              }}></Image>
​
​
            <View style={{
              backgroundColor: "#162724",
              marginLeft: "39%",
              marginRight: "110px",
              textAlign: "center",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              border: "0px solid white",
              position: "absolute",
              padding: "3px",
              top: "0px"
            }}>
​
              <Text style={{
                padding: "3px",
                textAlign: "center", color: "#29B080", marginTop:"-30px", fontSize: "13px"
              }}>Your DAOs</Text>
            </View>

              <View style={{display:"inline"}}>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: "30%",
                    marginLeft: "5%",
                    top: "1",
                    position: "absolute"
                  }}>Gods Meeting</Text>
                  <Text
                  style={{
                    textAlign: "center",
                    marginTop: "37%",
                    marginLeft: "5%",
                    top: "1",
                    position: "absolute",
                    fontSize:"12px",
                    color:"#6A6A6A"
                  }}>Join the latest meeting of your favorite DAO</Text>
               </View>
               <Image src="https://i.ibb.co/3M7Nj5B/Screen-Shot-2022-10-01-at-4-11-06-PM-1.png"
               style={{
                 height:"30px",
                 width:"30px",
                 position:"absolute",
                 top:"65px",
                 right:"2px",}}/>
              <Image src="https://i.ibb.co/3M7Nj5B/Screen-Shot-2022-10-01-at-4-11-06-PM-1.png"
               style={{
                 height:"30px",
                 width:"30px",
                 position:"absolute",
                 top:"65px",
                 left:"2px",
                 transform:"rotate(180deg)"}}/>
              </View>
          <View style={{
            marginLeft: "25px",
            marginTop: "-35px",
            display: "flex",
          }}>
            <Text style={{ display: "in-line", whiteSpace: "nowrap", top: "50%", transform: "translateY(30%)" }}>Live Rooms</Text>
            {/*<TextField type="text" style={{
          marginLeft: "40px",
          color: "#8E0E05",
          borderRadius:"10px",
          border: "1px solid #FE5656",
          backgroundColor: "#8E0E05",
          }}/>*/}
            <Button
              style={{
                marginLeft: "110px", marginTop: "10px", height: "25px", width: "36%",
                backgroundColor: "#162724", border: "1px solid #29B080", borderRadius: "10px", color: "#29B080"
              }}
              onClick={() => createRoom('plaza')}
            >Create Room</Button>
​
          </View>
          <View>
            <View style={{ marginLeft: "30px", display: "flex" }}>
              <Button onClick={() => setIframeToggle(5)} style={{
                width: "94%", height: "70px", color: "#55481A",
                border: "2px solid #272829", backgroundColor: "#131314", marginLeft: "-8px", marginRight: "10px", marginTop: "10px", padding: "8px"
              }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fassets%2Fimages%2Frooms%2Fplaza.jpg&w=3840&q=75"
                  style={{
                    width: "33%", height: "100%", borderRadius: "10px", marginLeft: "-70px"
                  }}></Image>
                <View style={{ display: "inline", marginLeft: "20px" }}>
                  <View style={{ display: "flex" }}>
                    <Image src="https://solarity-new-frontend.vercel.app/_next/static/media/logo.03981c37.svg" style={{
                      borderRadius: "50px", width: "14px", height: "14px", marginLeft: "2px"
                    }} />
                    <Text style={{ fontSize: "10px", marginLeft: "5px", color: "#929298" }}>Solarity</Text></View>
                  <Text style={{ marginTop: "5px", fontSize: "15px" }}>Solarity Plaza</Text>
                </View>
              </Button>
            </View>
            <View style={{ marginLeft: "30px", display: "flex" }}>
              <Button    onClick={() => setIframeToggle(4)} style={{
                width: "94%", height: "70px", color: "#55481A",
                border: "2px solid #272829", backgroundColor: "#131314", marginLeft: "-8px", marginRight: "10px", marginTop: "10px", padding: "8px"
              }}>
                <Image src="https://scontent.fflr2-1.fna.fbcdn.net/v/t39.30808-6/310258987_5578839815497008_6694158208071726280_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=HOcvli3mMqwAX9CeU6b&_nc_ht=scontent.fflr2-1.fna&oh=00_AT-gGp-QwrP56fcsR3vj-QojN2YY_E0tk3-dlWGJl24pRQ&oe=6341C5DB"
                  style={{
                    width: "33%", height: "100%", borderRadius: "10px", marginLeft: "-65px"
                  }}></Image>
                <View style={{ display: "inline", marginLeft: "20px" }}>
                  <View style={{ display: "flex" }}>
                    <Image src="https://ph-files.imgix.net/f7b79674-acb8-49c9-a00c-0463402cff89.png?auto=format" style={{
                      borderRadius: "50px", width: "14px", height: "14px", marginLeft: "2px"
                    }} />
                    <Text style={{ fontSize: "10px", marginLeft: "5px", color: "#929298" }}>Double Diffusion</Text></View>
                  <Text style={{ marginTop: "5px", fontSize: "15px" }}>AI Art Gallery</Text>
                </View>
              </Button>
            </View>
          </View>
          <Text style={{ marginLeft: "20px", marginTop: "10px", whiteSpace: "nowrap", }}>Explore</Text>
          <View style={{ display: "flex", marginLeft: "15px", padding: "5px" }}>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F1.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Temple</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "15px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>SolGods</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F2.jpg&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Hexagons</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "125px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>Solarity</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829"
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fassets%2Fimages%2Frooms%2Fgallery.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}> Gallery</Text>
              </View>
​
            </Button>
            
            
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "240px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>AI Art</Text>
          </View>
          
          
        </View>

      )}
      {iframeToggle == 2 && ( /**Profilo */
        <View className="App" style={{ background: "linear-gradient(to bottom, #131314 70%, #090500"}}>
          <View style={{ backgroundColor: "#131314", display: "flex", padding: "8px", borderBottom: "1px solid #1D1F1F" }}>
            <Image src="https://solarity-new-frontend.vercel.app/_next/static/media/logo.03981c37.svg" style={{ width: "15%", height: "40px", paddingLeft: "10px" }} />
            <Text style={{
              textAlign: "left",
              top: "50%", transform: "translateY(20%)", paddingLeft: "10px"
            }}>SGN</Text>
          </View>
          ​
        <View style={{
          background: "",
          textAlign: "center",
          margin: "30px",
          marginTop:"20px",
          height: "180px",
          borderRadius: "10px",
          border: "1px solid #272829",
          position: "relative",
          top:"-30px"
        }}>
          <Iframe src="https://solarity-frontend.vercel.app/frames/ownroom1" style={{left:"0px", borderRadius:"10px"}}/>   
          <View style={{
            backgroundColor: "#162724",
            marginLeft: "39%",
            marginRight: "110px",
            textAlign: "center",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            border: "0px solid white",
            position: "absolute",
            padding: "3px",
            top: "0px",
            left:"5%"
          }}>
​ 
            <Text style={{
              padding: "3px",
              textAlign: "center", color: "#29B080", marginTop:"-30px", fontSize: "13px"
            }}>Room</Text>
          </View>
        </View>
        <Image src="https://pbs.twimg.com/profile_images/1577403978299674629/vH9DK-6h_400x400.jpg"
          style={{width:"100px", height:"100px", borderRadius:"35px", border:"1px solid #29B080", marginTop:"-130px",
          position:"absolute", marginLeft:"140px"}}></Image>
        <Text style={{
          marginTop:"-20px",
          marginLeft:"10px",
          fontSize:"17px",
          textAlign:"center"
        }}>armani.verse</Text>
        <Button style={{
          margin:"30px",
          marginTop:"10px",
          width:"30px !important",         
        }}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
          style={{width:"15px ", height:"15px"}}/>
        </Button>
        <Button style={{
          margin:"30px",
          marginLeft:"-15px",
          marginTop:"10px",
          width:"30px !important",
        }}>
          <Image src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png"
          style={{width:"15px ", height:"15px"}}/>
        </Button>
        <View style={{background:"grey", border:"0.5px solid #1D1F1F", marginTop:"-17px"}}></View>

        <Text style={{
          color:"#929298",
          fontSize:"13px",
          margin:"30px",
          marginTop:"10px",
          marginBottom:"5px",
          textAlign:"left"
        }}>Goated at everything I do. working on open source every field I see.</Text>
        <View style={{display:"flex", border:"1px solid #272829", borderRadius:"40px", marginLeft:"20px", marginRight:"20px"}}>
          <Button style={{backgroundColor:"transparent", borderRadius:"0px"}}>Feed</Button>
          <Button style={{backgroundColor:"#162724", borderRadius:"40px", color:"#29B080"}}>Gallery</Button>
          <Button style={{backgroundColor:"transparent", borderRadius:"0px"}}>Rooms</Button>
          <Button style={{backgroundColor:"transparent", borderRadius:"0px"}}>DAOs</Button>
        </View>
        <Text style={{marginLeft:"30px", fontSize:"15px", marginTop:"10px"}}>Armani's NFTs</Text>
        <View style={{ display: "flex", marginLeft: "15px", padding: "5px" }}>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F1.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Temple</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "15px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>SolGods</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F2.jpg&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Hexagons</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "125px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>Solarity</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829"
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fassets%2Fimages%2Frooms%2Fgallery.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}> Gallery</Text>
              </View>
            </Button>
          </View>
      </View>
      )}
      {iframeToggle == 3 && (
      <View className="App" style={{ background: "linear-gradient(to bottom, #131314 70%, #090500"}}>
        <View style={{ backgroundColor: "#131314", display: "flex", padding: "8px", borderBottom: "1px solid #1D1F1F" }}>
          <Image src="https://solarity-new-frontend.vercel.app/_next/static/media/logo.03981c37.svg" style={{ width: "15%", height: "40px", paddingLeft: "10px" }} />
          <Text style={{
            textAlign: "left",
            top: "50%", transform: "translateY(20%)", paddingLeft: "10px"
          }}>SGN</Text>
        </View>
        <Text style={{textAlign:"center", fontSize:"20px"}}>Top Events For You</Text>
        <View style={{
          background: "",
          textAlign: "center",
          margin: "20px",
          height: "170px",
          borderRadius: "10px",
          border: "1px solid #272829",
          position: "relative",
          top:"-10px"
        }}>
          
          <Image src="https://i.ibb.co/fkBjrWS/Screen-Shot-2022-10-04-at-1-48-16-PM.png" style={{left:"0px", borderRadius:"10px", width:"100%", height:"100%"}}/>   
          <View style={{
            backgroundColor: "#162724",
            marginLeft: "34%",
            marginRight: "110px",
            textAlign: "center",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            border: "0px solid white",
            position: "absolute",
            padding: "3px",
            top: "0px",
            left:"5%"
          }}>
​            
            <Text style={{
              padding: "3px",
              textAlign: "center", color: "#29B080", marginTop:"-30px", fontSize: "13px"
            }}>Calendar</Text>
          </View>
        </View>
        <Text style={{marginLeft:"20px", marginTop:"-10px"}}>From Your DAOs</Text>
        <View style={{ display: "flex", marginLeft: "15px", padding: "5px" }}>
            <Button onClick={() => setIframeToggle(7)} style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://cdn.cloudflare.steamstatic.com/steam/apps/886250/ss_eb7c2732a9aa83ce003c00e3bf3668b9beb83869.1920x1080.jpg?t=1662624808"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-5px", marginLeft:"5px", color:"#6A6A6A",fontSize: "9px", textAlign:"Left" }}>MonkeDAO</Text>
                <Text style={{ marginTop: "-5px", marginBottom: "-3px", fontSize: "14px" }}>Poker Night</Text>
                
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "15px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>22/10/22</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F2.jpg&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
<Text style={{ marginTop: "-5px", marginBottom: "-5px", marginLeft:"5px", color:"#6A6A6A",fontSize: "9px", textAlign:"Left" }}>MonkeDAO</Text>
                <Text style={{ marginTop: "-5px", marginBottom: "-3px", fontSize: "14px" }}>Poker Night</Text>              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "125px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>Solarity</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829"
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fassets%2Fimages%2Frooms%2Fgallery.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
<Text style={{ marginTop: "-5px", marginBottom: "-5px", marginLeft:"5px", color:"#6A6A6A",fontSize: "9px", textAlign:"Left" }}>MonkeDAO</Text>
                <Text style={{ marginTop: "-5px", marginBottom: "-3px", fontSize: "14px" }}>Poker Night</Text>              </View>
            </Button>
          </View>
          <Text style={{marginLeft:"20px", marginTop:"10px"}}>Upcoming Mints</Text>
        <View style={{ display: "flex", marginLeft: "15px", padding: "5px" }}>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F1.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Temple</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "15px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>SolGods</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F2.jpg&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Hexagons</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "125px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>Solarity</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829"
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fassets%2Fimages%2Frooms%2Fgallery.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}> Gallery</Text>
              </View>
            </Button>
          </View>
          <Text style={{marginLeft:"20px", marginTop:"10px"}}>Earning events</Text>
        <View style={{ display: "flex", marginLeft: "15px", padding: "5px" }}>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F1.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Temple</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "15px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>SolGods</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F2.jpg&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Hexagons</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "125px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>Solarity</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829"
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fassets%2Fimages%2Frooms%2Fgallery.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}> Gallery</Text>
              </View>
            </Button>
          </View>
          <Text style={{marginLeft:"20px", marginTop:"10px"}}>From Your DAOs</Text>
        <View style={{ display: "flex", marginLeft: "15px", padding: "5px" }}>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F1.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Temple</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "15px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>SolGods</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829", marginRight: "12px",
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fimages%2Fplaceholder%2Fmarketplace%2Frooms%2F2.jpg&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}>Hexagons</Text>
              </View>
​
            </Button>
            <Text style={{
              fontSize: "9px", background: "#272829 50%", marginLeft: "125px", padding: "2px",
              position: "absolute", top: "1", marginTop: "15px", blurRadius: "1", borderRadius: "5px"
            }}>Solarity</Text>
            <Button style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#131314",
              border: "2px solid #272829"
            }}>
              <View style={{ display: "inline" }}>
                <Image src="https://solarity-frontend.vercel.app/_next/image?url=%2Fassets%2Fimages%2Frooms%2Fgallery.png&w=3840&q=75"
                  style={{ width: "85px", height: "60px", marginTop: "-5px", borderRadius: "10px" }} />
                <Text style={{ marginTop: "-5px", marginBottom: "-10px", fontSize: "14px" }}> Gallery</Text>
              </View>
            </Button>
          </View>
          
      </View>
      )}
      {iframeToggle == 4 && (
      <Iframe style={{marginBottom:"50px"}} src="https://solarity-frontend.vercel.app/iframe/joinModal/gallery"/>
      )}
      {iframeToggle == 5 && (
      <View >
        <Iframe style={{ position: "absolute", featurepolicy:"{&quot;vr&quot;: [&quot;*&quot;]}", allow:"camera;microphone;", allowfullscreen:"true", scrolling:"no", width:"100%", height:"100%"}} src="https://solarity-frontend.vercel.app/iframe/joinModal/plaza"/>
      </View>
      )}
      {iframeToggle == 6 && (
      <View >
        <Iframe style={{ position: "absolute", featurepolicy:"{&quot;vr&quot;: [&quot;*&quot;]}", allowfullscreen:"true", scrolling:"no", width:"100%", height:"100%"}} src="https://solarity-new-frontend.vercel.app/"/>
      </View>
      )}
      {iframeToggle == 7 && (
      <View>
        <View style={{width:"100%"}}>
          <Image src="https://shangrilaheritage.it/wp-content/uploads/2019/02/shangri-la-heritage-video-passo-crocedomini-shade.png"
            style={{
              width: "100%",
              height: "38%",
              position:'absolute', 
              transform: "rotate(180deg)",
          }}></Image>
          </View>
          <Image src="https://cdn.cloudflare.steamstatic.com/steam/apps/886250/ss_eb7c2732a9aa83ce003c00e3bf3668b9beb83869.1920x1080.jpg?t=1662624808"
          style={{height:"50%", width:"100%"}}/>
          <View style={{display:"flex", marginLeft:"20px"}}>
            <Image src="https://blog.hubbleprotocol.io/content/images/2022/07/5SITyGby_400x400.png" 
            style={{borderRadius:"50px", height:"30px", width:"30px", marginTop:"-25px", position:"absolute", top:"1"}}/>
            <Text style={{marginLeft:"35px", position:"absolute", marginTop:"-20px", top:"1"}}>MonkeDAO</Text>
          </View>
          <View style={{display:"flex", marginTop:"10px"}}>
            <Text style={{fontSize:"28px", marginLeft:"20px", marginTop:"10px"}}>Poker Night</Text>
            <Button style={{
          right:"-17%",
          marginTop:"15px",
          marginBottom:"10px",
          width:"",
          height:"-1px",
          fontSize:"14px",
          backgroundColor:"#162724",
          color:"#29B080",
          border:"1px solid #29B080"}}>
          Partecipate</Button>
          </View>
          <Text style={{color:"#929298",
          fontSize:"13px",
          margin:"20px",
          marginTop:"5px",
          marginBottom:"5px",
          textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </Text>
          <View style={{marginLeft:"20px", marginTop:"10px"}}>
            <Text style={{fontSize:"17px"}}>Date</Text>
            <Text style={{
              fontSize:"13px",
              color:"#29B080"
            }}>Saturday 11 October, 19:00 UCT</Text>
          </View>
          <Text style={{marginTop:"10px", marginLeft:"20px", marginBottom:"10px", fontSize:"17px"}}>Partecipants</Text>
          <View style={{background:"#1D1D1E", borderRadius:"15px", height:"60px", width:"90%", marginLeft:"20px", display:"flex"}}>
            <Image src="https://media.howrare.is/images/degenapes/853ba80b3bb9de626e4e5674c8d84706.jpg"
            style={{
              height:"40px",
              width:"40px",
              borderRadius:"15px",
              marginLeft:"10px",
              marginTop:"10px"
            }}/>
            <Text style={{marginLeft:"20px", marginTop:"18px"}}>User1</Text>
            <Text style={{marginLeft:"40%", marginTop:"20px", fontSize:"13px", color:"#B3B3B7"}}> Is Going</Text>
          </View>
          <View style={{background:"#1D1D1E", borderRadius:"15px", height:"60px", width:"90%", marginLeft:"20px", marginTop:"5px",display:"flex"}}>
            <Image src="https://media.howrare.is/images/degenapes/853ba80b3bb9de626e4e5674c8d84706.jpg"
            style={{
              height:"40px",
              width:"40px",
              borderRadius:"15px",
              marginLeft:"10px",
              marginTop:"10px"
            }}/>
            <Text style={{marginLeft:"20px", marginTop:"18px"}}>User1</Text>
            <Text style={{marginLeft:"40%", marginTop:"20px", fontSize:"13px", color:"#B3B3B7"}}> Is Going</Text>
          </View>
        </View>
      )}
      <View style={{position:"absolute", bottom:"0px", display:"flex", background:"#181818", height:"50px"}}>
        <Button style={{borderRadius:"0px", background:"#181818", borderRight:"1px solid grey"}} onClick={() => setIframeToggle(1)}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M6.9125 21C5.30397 21 4 19.696 4 18.0875V10.5056C4 9.55818 4.44754 8.66643 5.20718 8.10024L10.2459 4.34465C11.315 3.54782 12.7817 3.55222 13.846 4.35545L18.8072 8.09979C19.5584 8.66671 20 9.55326 20 10.4944V18.075C20 19.6904 18.6904 21 17.075 21H16.2929C15.1094 21 14.15 20.0406 14.15 18.8571C14.15 17.6737 13.171 16.7143 11.9875 16.7143C10.804 16.7143 9.825 17.6737 9.825 18.8571C9.825 20.0406 8.86561 21 7.68214 21H6.9125ZM5.5 18.0875C5.5 18.8676 6.1324 19.5 6.9125 19.5C7.6926 19.5 8.325 18.8676 8.325 18.0875V17.3571C8.325 16.1737 9.28439 15.2143 10.4679 15.2143H13.5071C14.6906 15.2143 15.65 16.1737 15.65 17.3571V18.075C15.65 18.862 16.288 19.5 17.075 19.5C17.862 19.5 18.5 18.862 18.5 18.075V11.243C18.5 10.3027 18.0591 9.41675 17.3089 8.84974L13.845 6.23172C12.7813 5.42774 11.3146 5.42233 10.245 6.21843L6.70883 8.8503C5.94822 9.4164 5.5 10.3087 5.5 11.2569V18.0875Z" fill="currentColor"></Path></Svg>
          </Button>
        <Button style={{borderRadius:"0px", background:"#181818", borderRight:"1px solid grey"}} onClick={() => setIframeToggle(0)}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M17.3333 7H18C18.5523 7 19 7.44772 19 8V10.9532C19 12.6709 18.1217 13.5116 17 12.6709" stroke="currentColor" stroke-linecap="round"></Path><Path d="M5.66667 7H5C4.44771 7 4 7.44772 4 8V10.9532C4 12.6709 4.8783 13.5116 6 12.6709" stroke="currentColor" stroke-linecap="round"></Path><Path d="M7.93652 21.7314C7.66038 21.7314 7.43652 21.5076 7.43652 21.2314C7.43652 20.9553 7.66038 20.7314 7.93652 20.7314H9.91914C10.5161 20.7314 11 20.2475 11 19.6506C11 19.1207 10.6139 18.6749 10.1022 18.5372C8.89105 18.2114 7.6198 17.6095 6.86152 16.7314C5.91152 15.6314 5.43652 13.2314 5.43652 10.7314V4.73145C5.43652 3.07459 6.77967 1.73145 8.43652 1.73145H14.4365C16.0934 1.73145 17.4365 3.07459 17.4365 4.73145V10.7314C17.4365 12.2314 16.9615 15.6314 16.0115 16.7314C15.256 17.6063 14.0714 18.2071 12.8971 18.5337C12.3865 18.6757 12 19.1207 12 19.6506C12 20.2475 12.4839 20.7314 13.0809 20.7314H14.9365C15.2127 20.7314 15.4365 20.9553 15.4365 21.2314C15.4365 21.5076 15.2127 21.7314 14.9365 21.7314H7.93652ZM11.5 17.5C13.5 17.5 14.6432 16.5353 15 16C16 14.5 16.3115 12.2314 16.3115 9.73145H6.5C6.5 12.0086 6.79994 14.5085 7.71375 15.6778C7.88459 15.8964 8.0753 16.1015 8.27157 16.2976C8.71698 16.7426 9.73441 17.5 11.5 17.5ZM6.5 9.73145H16.3115V5.7131C16.3115 4.05625 14.9684 2.7131 13.3115 2.7131H9.5C7.84314 2.7131 6.5 4.05624 6.5 5.7131V9.73145Z" fill="currentColor"></Path></Svg>
        </Button>
        <Button style={{borderRadius:"0px", background:"#181818", borderRight:"1px solid grey"}} onClick={() => setIframeToggle(3)}>
        <Svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M8.12864 13.6904C9.99919 13.6904 11.5156 12.2335 11.5156 10.4363C11.5156 8.63905 9.99919 7.18213 8.12864 7.18213C6.25808 7.18213 4.7417 8.63905 4.7417 10.4363C4.7417 12.2335 6.25808 13.6904 8.12864 13.6904Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></Path><Path d="M13.9466 20.1984C13.9466 17.6797 11.3387 15.6426 8.12784 15.6426C4.91702 15.6426 2.30908 17.6797 2.30908 20.1984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></Path><Path d="M19.8713 8.31002C21.7419 8.31002 23.2583 6.8531 23.2583 5.05589C23.2583 3.25868 21.7419 1.80176 19.8713 1.80176C18.0008 1.80176 16.4844 3.25868 16.4844 5.05589C16.4844 6.8531 18.0008 8.31002 19.8713 8.31002Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></Path><Path d="M25.6893 14.818C25.6893 12.2993 23.0813 10.2622 19.8705 10.2622C16.6597 10.2622 14.0518 12.2993 14.0518 14.818" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></Path></Svg>
        </Button>
        <Button style={{borderRadius:"0px", background:"#181818", borderRight:"1px solid grey", width:"80px"}} onClick={() => setIframeToggle(2)}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M10.0002 9.99984C12.3013 9.99984 14.1668 8.13436 14.1668 5.83317C14.1668 3.53198 12.3013 1.6665 10.0002 1.6665C7.69898 1.6665 5.8335 3.53198 5.8335 5.83317C5.8335 8.13436 7.69898 9.99984 10.0002 9.99984Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></Path><Path d="M17.1575 18.3333C17.1575 15.1083 13.9492 12.5 9.99915 12.5C6.04915 12.5 2.84082 15.1083 2.84082 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></Path></Svg>
        </Button>
      </View>
    </View>
  );
}