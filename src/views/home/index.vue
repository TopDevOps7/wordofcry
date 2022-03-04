<template>
  <div
    v-bind:class="{ 'with-footer-1': !isFooter2, 'with-footer-2': isFooter2 }"
  >
    <div class="content-header" id="header">
      <div class="header-0"></div>
      <div class="header-1"></div>
      <div class="header-2"></div>
      <div class="header-3"></div>
      <div class="header-4"></div>
      <div class="header-5"></div>
      <div class="header-6"></div>
    </div>
    <div id="contents">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div
            class="body-0"
            @mousedown="mouseDown"
            @mouseup="mouseUp"
            @mousemove="mouseMove"
          >
            <div class="play-button" id="home-play-now">
              <div class="button-label">
                <!-- <a
                  type="text"
                  href="https://cryptoids.gitbook.io/whitepaper/cryptoids/overview"
                  >WHITEPAPER</a
                >
                <div class="sp">/</div>
                <a class="text text-desktop" href="./player.html">TUTORIAL</a> -->
                <!-- <router-link class="text text-mobile" to="/player"
                  >TUTORIAL</router-link
                > -->
              </div>
              <!-- <a class="playnow-button" href="https://game.cryptoids.world/infinity/?c=&p="> -->
              <a
                class="playnow-button"
                href="#"
                target="_blank"
                data-to="playURL"
              >
                <p class="pp">PLAY NOW</p>
              </a>
              <div class="play-online" style="display: none">
                <a
                  target="_blank"
                  href="https://play.google.com/intl/en_us/badges/"
                >
                  <img src="../../img/online-2.png" />
                </a>
                <a
                  target="_blank"
                  href="https://developer.apple.com/app-store/marketing/guidelines/"
                >
                  <img src="../../img/online-3.png" />
                </a>
              </div>
            </div>
            <div class="contract">
              <div>
                <div class="addressfield">
                  <span class="address">$CGC Contract Address</span>
                  <div class="address_area">
                    <div>
                      <span class="code"
                        >0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B</span
                      >
                    </div>
                    <div class="buttonfield" v-show="buttonshow">
                      <button
                        class="copy"
                        @click="
                          copyCode(
                            '.copy',
                            '0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B'
                          )
                        "
                        style="cursor: pointer"
                      ></button>
                    </div>
                  </div>
                </div>
                <div class="checkedfield" v-show="showflag">
                  <span class="tooltiptext">Copied</span>
                  <input
                    type="checkbox"
                    id="checkbox"
                    v-model="checked"
                    disabled
                  />
                </div>
              </div>
              <div>
                <div class="addressfield">
                  <span class="address">$CAC Contract Address</span>
                  <div class="address_area">
                    <div>
                      <span class="code"
                        >0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a</span
                      >
                    </div>
                    <div class="buttonfield" v-show="buttonshow1">
                      <button
                        class="copy"
                        @click="
                          copyCode(
                            '.copy',
                            '0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a'
                          )
                        "
                        style="cursor: pointer"
                      ></button>
                    </div>
                  </div>
                </div>
                <div class="checkedfield" v-show="showflag1">
                  <span class="tooltiptext">Copied</span>
                  <input
                    type="checkbox"
                    id="checkbox"
                    v-model="checked1"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="img-con">
              <img src="../../img/cryptoid-1.png" class="img-1" /><img
                src="../../img/cryptoid-2.png"
                class="img-2"
              /><img src="../../img/grasses.png" class="img-3" /><img
                src="../../img/grasses.png"
                class="img-4"
              />
              <div class="img-box">
                <img src="../../img/Logo_S2.png" class="img-5" /><img
                  src="../../img/sub_logo.png"
                  class="img-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="body-1">
            <div class="words">BREED RARE AND<br />UNIQUE CRYPTOIDS</div>
            <div class="doll-bg">
              <div class="doll-1">
                <img
                  src="../../assets/1110z1/images/nft_mobile_dw_1.png"
                  width="14%"
                  class="doll-1"
                />
              </div>
              <div class="doll-2">
                <img
                  src="../../assets/1110z1/images/nft_mobile_dw_2.png"
                  width="17%"
                  class="doll-2"
                />
              </div>
              <div class="doll-3">
                <img
                  src="../../assets/1110z1/images/nft_mobile_dw_3.png"
                  width="17%"
                  class="doll-3"
                />
              </div>
            </div>
            <div class="market-button-wrap">
              <a class="market-button" href="#" data-to="marketURL">
                <p class="pp">MARKETPLACE</p>
              </a>
            </div>

            <div class="label">BREED<br />YOUR<br />NFT<br />COLLECTIBLES</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="body-2">
            <div class="words">METAVERSE<br />ADVENTURE MODE</div>
            <div class="game-video">
              <div class="video-body-1" @click="playOrPause">
                <video
                  id="body2-video1"
                  src="../../img/PVP_1.mp4"
                  class="video"
                  muted
                  loop
                  playsinline
                  poster="../../assets/1110z1/images/game-play-pic.png"
                  @canplay="videoCanplay(1)"
                  @play="playGameVideoStart"
                />
              </div>
              <div class="video-body-2" @click="playOrPause">
                <video
                  id="body2-video2"
                  src="../../img/PVP_2.mp4"
                  class="video"
                  muted
                  loop
                  playsinline
                  poster="../../assets/1110z1/images/game-play-pic.png"
                  @canplay="videoCanplay(2)"
                  @play="playGameVideoStart"
                />
              </div>
            </div>
            <a href="#" class="market-button" data-to="playURL">
              <p class="pp">PLAY MORE</p>
            </a>
            <div class="label">CHALLENGING<br />GAMEPLAY</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="body-3">
            <div class="words">EARN CRYPTOCURRENCY<br />REWARDS BY PLAYING</div>
            <div class="game-video">
              <div class="video-body-1" @click="playOrPause">
                <video
                  id="body3-video1"
                  src="../../img/PVE_1.mp4"
                  class="video"
                  muted
                  loop
                  playsinline
                  poster="../../assets/1110z1/images/game-play-pic.png"
                  @canplay="videoCanplay(1)"
                  @play="playGameVideoStart"
                />
              </div>
              <div class="video-body-2" @click="playOrPause">
                <video
                  id="body3-video2"
                  src="../../img/PVE_2.mp4"
                  class="video"
                  muted
                  loop
                  playsinline
                  poster="../../assets/1110z1/images/game-play-pic.png"
                  @canplay="videoCanplay(2)"
                  @play="playGameVideoStart"
                />
              </div>
            </div>
            <a href="#" class="market-button" data-to="marketURL">
              <p class="pp">EARN MORE</p>
            </a>
            <div class="label">Sustainable<br />play<br />to<br />earn</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="body-4">
            <div class="words">
              what are you<br />
              waiting for?!
            </div>
            <div class="sub-words">Follow us now!</div>
            <div class="content-bg">
              <div class="icons">
                <a
                  href="https://www.instagram.com/worldofcryptoids/"
                  target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-ig.png"
                    class="icon-1"
                /></a>
                <a href="https://bit.ly/3EXoUJ4" target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-1.png"
                    class="icon-1"
                /></a>
                <a href="https://linktr.ee/cryptoids" target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-linktr.png"
                    class="icon-1"
                /></a>
                <!-- <a href="https://bit.ly/3yqlAU0"><img src="../../assets/1110z1/images/follow-us-icon-2.png" class="icon-1" /></a> -->
                <a
                  href="https://www.reddit.com/r/worldofcryptoids/"
                  target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-3.png"
                    class="icon-1"
                /></a>
                <a href="https://bit.ly/3IGaMWG" target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-4.png"
                    class="icon-1"
                /></a>
                <a href="https://bit.ly/3GXxiJd" target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-5.png"
                    class="icon-1"
                /></a>
                <a href="https://bit.ly/3dQmfoo" target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-6.png"
                    class="icon-1"
                /></a>
                <a href="https://bit.ly/3DSor9B" target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-7.png"
                    class="icon-1"
                /></a>
                <a
                  href="https://www.youtube.com/c/WorldofCryptoids"
                  target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-youtube.png"
                    class="icon-1"
                /></a>
                <a
                  href="https://www.linkedin.com/company/world-of-cryptoids/"
                  target="_blank"
                  ><img
                    src="../../assets/1110z1/images/follow-us-icon-linkedin.png"
                    class="icon-1"
                /></a>
              </div>
              <div class="icons_moblie">
                <div class="fisrt_moblie">
                  <a href="https://bit.ly/3dQmfoo" target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-6.png"
                      class="icon-1"
                  /></a>
                  <a href="https://bit.ly/3GXxiJd" target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-5.png"
                      class="icon-1"
                  /></a>
                  <a href="https://bit.ly/3IGaMWG" target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-4.png"
                      class="icon-1"
                  /></a>
                  <a href="https://bit.ly/3DSor9B" target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-7.png"
                      class="icon-1"
                  /></a>
                </div>
                <div class="second_imagefield">
                  <a href="https://bit.ly/3EXoUJ4" target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-1.png"
                      class="icon-1"
                  /></a>
                  <a
                    href="https://www.instagram.com/worldofcryptoids/"
                    target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-ig.png"
                      class="icon-1"
                  /></a>
                  <a
                    href="https://www.reddit.com/r/worldofcryptoids/"
                    target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-3.png"
                      class="icon-1"
                  /></a>
                </div>
                <div class="third_imagefield">
                  <a href="https://linktr.ee/cryptoids" target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-linktr.png"
                      class="icon-1"
                  /></a>
                  <a
                    href="https://www.youtube.com/c/WorldofCryptoids"
                    target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-youtube.png"
                      class="icon-1"
                  /></a>
                  <a
                    href="https://www.linkedin.com/company/world-of-cryptoids/"
                    target="_blank"
                    ><img
                      src="../../assets/1110z1/images/follow-us-icon-linkedin.png"
                      class="icon-1"
                  /></a>
                </div>
              </div>
              <div class="doll">
                <img src="../../assets/1110z1/images/follow-us-dw.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="body-5">
            <div class="words">OUR<br />Partners</div>
            <div class="content-bg">
              <div class="icon-container">
                <a class="mobile-order-1" href="https://www.binance.com/en"
                  ><img src="../../img/logo/01_bina.png" alt=""
                /></a>
                <a class="mobile-order-1" href="https://ideaology.io/"
                  ><img src="../../img/logo/02_ide.png" alt=""
                /></a>
                <a class="mobile-order-1" href="https://metamask.io/"
                  ><img src="../../img/logo/03_meta.png" alt=""
                /></a>
                <a class="mobile-order-1" href="https://pathdao.io/"
                  ><img src="../../img/logo/04_path.png" alt=""
                /></a>
                <a class="mobile-order-5" href="https://astraguild.io/"
                  ><img src="../../img/logo/05_astra.png" alt=""
                /></a>
                <a class="mobile-order-5" href="https://www.certik.com/"
                  ><img src="../../img/logo/06_cer.png" alt=""
                /></a>
                <a class="mobile-order-6" href="https://refinable.com/"
                  ><img src="../../img/logo/07_refina.png" alt=""
                /></a>
                <a
                  class="half mobile-order-4 right-space"
                  href="https://www.alphadao.financial/"
                  ><img src="../../img/logo/08_1_alpha.png" alt=""
                /></a>
                <a
                  class="half mobile-order-2 left-space"
                  href="https://www.genshards.com/"
                  ><img src="../../img/logo/08_2_gene.png" alt=""
                /></a>
                <a class="mobile-order-5" href="https://pancakeswap.finance/"
                  ><img src="../../img/logo/09_pancake.png" alt=""
                /></a>
                <a class="mobile-order-6" href="https://treasureland.market/"
                  ><img src="../../img/logo/10_tre.png" alt=""
                /></a>
                <a class="mobile-order-6" href="https://voxmagna.co/"
                  ><img src="../../img/logo/11_vox.png" alt=""
                /></a>
                <a class="half mobile-order-4" href="https://nftcalendar.io/"
                  ><img src="../../img/logo/12_nft.png" alt=""
                /></a>
                <a class="half mobile-order-6" href="https://nftcalendar.io/"
                  ><img src="../../img/logo/14_nft.png" alt=""
                /></a>
                <a
                  class="half half-full mobile-order-6"
                  href="https://nftcalendar.io/"
                  style="margin-left: 1.4vw"
                  ><img src="../../img/logo/13_nft.png" alt=""
                /></a>
              </div>
              <div class="icon-container_mobile">
                <div class="order-1_div">
                  <a class="mobile-order-1" href="https://www.binance.com/en"
                    ><img src="../../img/logo/01_bina.png" alt=""
                  /></a>
                  <a class="mobile-order-1" href="https://ideaology.io/"
                    ><img src="../../img/logo/02_ide.png" alt=""
                  /></a>
                </div>
                <div class="order-1_div1">
                  <a class="mobile-order-1" href="https://metamask.io/"
                    ><img src="../../img/logo/03_meta.png" alt=""
                  /></a>
                  <a class="mobile-order-1" href="https://pathdao.io/"
                    ><img src="../../img/logo/04_path.png" alt=""
                  /></a>
                </div>
                <div class="order-5_div">
                  <a class="mobile-order-5" href="https://astraguild.io/"
                    ><img src="../../img/logo/05_astra.png" alt=""
                  /></a>
                  <a class="mobile-order-5" href="https://www.certik.com/"
                    ><img src="../../img/logo/06_cer.png" alt=""
                  /></a>
                </div>

                <a
                  class="half mobile-order-4"
                  href="https://www.alphadao.financial/"
                  ><img src="../../img/logo/08_1_alpha.png" alt=""
                /></a>

                <a
                  class="half mobile-order-2 left-space"
                  href="https://www.genshards.com/"
                  ><img src="../../img/logo/08_2_gene.png" alt=""
                /></a>
                <a
                  class="half mobile-order-2 right-space"
                  href="https://nftcalendar.io/"
                  ><img src="../../img/logo/12_nft.png" alt=""
                /></a>
                <div class="order-5_div2">
                  <a class="mobile-order-5" href="https://pancakeswap.finance/"
                    ><img src="../../img/logo/09_pancake.png" alt=""
                  /></a>
                  <a class="mobile-order-5" href="https://refinable.com/"
                    ><img src="../../img/logo/07_refina.png" alt=""
                  /></a>
                </div>
                <div class="order-6_div">
                  <a class="mobile-order-6" href="https://treasureland.market/"
                    ><img src="../../img/logo/10_tre.png" alt=""
                  /></a>
                  <a class="mobile-order-6" href="https://voxmagna.co/"
                    ><img src="../../img/logo/11_vox.png" alt=""
                  /></a>
                </div>
                <div class="order-6_div1">
                  <a class="half mobile-order-6" href="https://nftcalendar.io/"
                    ><img src="../../img/logo/14_nft.png" alt=""
                  /></a>
                  <a
                    class="half half-full mobile-order-6"
                    href="https://nftcalendar.io/"
                    ><img src="../../img/logo/13_nft.png" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="body-6">
            <div class="footer-1">
              <div class="content-bg-header"></div>
              <div class="content-bg">
                <div class="content">
                  <div class="left">
                    <div class="footer-nav">
                      <a href="#">Cryptoids</a>
                      <div style="margin-top: 10px; margin-bottom: 10px">
                        <a href="/story.html#0">Story</a>
                      </div>
                      <div style="margin-bottom: 10px">
                        <a href="/story.html#2">Breeding</a>
                      </div>
                      <div style="margin-bottom: 10px">
                        <a href="/story.html#3">Battle</a>
                      </div>
                    </div>
                    <div class="footer-nav">
                      <a href="#">GAME INFO</a>
                      <div style="margin-top: 10px; margin-bottom: 10px">
                        <a href="/sP2E.html#0">sP2E</a>
                      </div>
                      <div style="margin-bottom: 10px">
                        <a href="/sP2E.html#1">Tokenomic</a>
                      </div>
                      <div style="margin-bottom: 10px">
                        <a href="/sP2E.html#2">NFT</a>
                      </div>
                      <div style="margin-bottom: 10px">
                        <a href="/sP2E.html#3">Guild & Scholarship</a>
                      </div>
                    </div>
                    <div class="footer-nav">
                      <a href="#">Getting Started</a>
                      <div style="margin-top: 10px; margin-bottom: 10px">
                        <a href="/player.html">Player</a>
                      </div>
                      <div style="margin-bottom: 10px">
                        <a href="/Guild.html">Guild</a>
                      </div>
                    </div>
                    <div class="footer-nav">
                      <a href="#">MISC</a>
                      <div style="margin-top: 10px; margin-bottom: 10px">
                        <a href="/FAQ.html">FAQ</a>
                      </div>
                      <div style="margin-bottom: 10px">
                        <a
                          href="https://cryptoids.gitbook.io/whitepaper/cryptoids/overview"
                          >Whitepaper</a
                        >
                      </div>
                      <div style="margin-bottom: 10px">
                        <a href="/Roadmap.html">Roadmap</a>
                      </div>
                    </div>
                    <div class="footer-nav">
                      <!-- <a :href="config.playURL" target="_blank">Play Now</a> -->
                      <a :href="config.marketURL" target="_blank"
                        >MARKETPLACE</a
                      >
                    </div>
                    <div class="footer-nav">
                      <a :href="config.eggURL" target="_blank">BACK TO TOP</a>
                    </div>
                  </div>
                  <div class="right">
                    <div
                      style="
                        color: whitesmoke;
                        font-size: 16px;
                        margin-bottom: 20px;
                      "
                    >
                      Follow US
                    </div>
                    <a href="https://bit.ly/3IGaMWG"
                      ><img src="../../assets/1110z1/images/footer--icon-1.png"
                    /></a>
                    <a href="https://bit.ly/3GXxiJd"
                      ><img src="../../assets/1110z1/images/footer-icon-2.png"
                    /></a>
                    <a href="https://bit.ly/3dQmfoo"
                      ><img src="../../assets/1110z1/images/footer-icon-3.png"
                    /></a>
                    <a href="https://bit.ly/3DSor9B"
                      ><img src="../../assets/1110z1/images/footer-icon-4.png"
                    /></a>
                    <br />
                    <a href="https://bit.ly/3EXoUJ4"
                      ><img src="../../assets/1110z1/images/footer-icon-5.png"
                    /></a>
                    <a href="https://bit.ly/3yqlAU0"
                      ><img src="../../assets/1110z1/images/footer-icon-8.png"
                    /></a>
                    <a href="https://www.reddit.com/r/worldofcryptoids/"
                      ><img src="../../assets/1110z1/images/footer-icon-7.png"
                    /></a>
                    <br />
                    <a href="https://www.reddit.com/r/worldofcryptoids/"
                      ><img
                        src="../../assets/1110z1/images/follow-us-icon_linkedin_grey.png"
                    /></a>
                    <a href="https://www.reddit.com/r/worldofcryptoids/"
                      ><img
                        src="../../assets/1110z1/images/follow-us-icon_linktr_grey.png"
                    /></a>
                    <a href="https://www.reddit.com/r/worldofcryptoids/"
                      ><img
                        src="../../assets/1110z1/images/follow-us-icon_youtube_grey.png"
                    /></a>
                  </div>
                  <div class="right_mobile">
                    <a href="https://www.reddit.com/r/worldofcryptoids/"
                      ><img
                        src="../../assets/1110z1/images/follow-us-icon_youtube_grey.png"
                    /></a>
                    <a href="https://bit.ly/3yqlAU0"
                      ><img src="../../assets/1110z1/images/footer-icon-8.png"
                    /></a>
                    <a href="https://bit.ly/3EXoUJ4"
                      ><img src="../../assets/1110z1/images/footer-icon-5.png"
                    /></a>
                    <a href="https://www.reddit.com/r/worldofcryptoids/"
                      ><img src="../../assets/1110z1/images/footer-icon-7.png"
                    /></a>
                    <a href="https://bit.ly/3IGaMWG"
                      ><img src="../../assets/1110z1/images/footer--icon-1.png"
                    /></a>
                    <a href="https://bit.ly/3GXxiJd"
                      ><img src="../../assets/1110z1/images/footer-icon-2.png"
                    /></a>
                    <a href="https://bit.ly/3dQmfoo"
                      ><img src="../../assets/1110z1/images/footer-icon-3.png"
                    /></a>
                    <a href="https://bit.ly/3DSor9B"
                      ><img src="../../assets/1110z1/images/footer-icon-4.png"
                    /></a>
                    <a href="https://www.reddit.com/r/worldofcryptoids/"
                      ><img
                        src="../../assets/1110z1/images/follow-us-icon_linktr_grey.png"
                    /></a>
                    <a href="https://www.reddit.com/r/worldofcryptoids/"
                      ><img
                        src="../../assets/1110z1/images/follow-us-icon_linkedin_grey.png"
                    /></a>
                  </div>
                </div>
                <div class="footer-logo">
                  <img src="../../assets/1110z1/images/home-logo.png" />
                  <div>
                    World of Cryptoids @ 2022, All rights reserved.
                    <a class="hide-mobile" href="/TermsAndConditions.html"
                      >Terms & Conditions. Privacy Policy</a
                    >

                    <div class="hide-desk">
                      <router-link class="text-span" to="/TAC"
                        >Terms & Conditions</router-link
                      >
                      <router-link class="text-span" to="/TAC"
                        >Privacy Policy</router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="footer-eggs">
                  <a href="#" @click="swiperFooter1"
                    ><img src="../../assets/1110z1/images/footer-egg-1.png"
                  /></a>
                  <a href="#" @click="swiperFooter1"
                    ><img src="../../assets/1110z1/images/footer-egg-2.png"
                  /></a>
                  <a href="#" @click="swiperFooter1"
                    ><img src="../../assets/1110z1/images/footer-egg-3.png"
                  /></a>
                  <a href="#" @click="swiperFooter1"
                    ><img src="../../assets/1110z1/images/footer-egg-4.png"
                  /></a>
                  <a href="#" @click="swiperFooter1"
                    ><img src="../../assets/1110z1/images/footer-egg-5.png"
                  /></a>
                </div>
              </div>
            </div>
            <div class="footer-2">
              <div class="content-bg-header"></div>
              <div class="content-bg">
                <div class="footer-eggs"></div>
                <div id="team-swiper">
                  <div class="dolls swiper-wrapper">
                    <div class="doll-body swiper-slide">
                      <a href="#" class="dolls-name"
                        ><div>Yuki Y</div>
                        <div>Creative Director</div></a
                      >
                      <div class="doll-pic">
                        <a href="#"
                          ><img src="../../assets/1110z1/images/team-dw-1.png"
                        /></a>
                      </div>
                    </div>
                    <div class="doll-body swiper-slide">
                      <a href="#" class="dolls-name"
                        ><div>Zeta L</div>
                        <div>Marketing Lead</div></a
                      >
                      <div class="doll-pic">
                        <a href="#"
                          ><img src="../../assets/1110z1/images/team-dw-2.png"
                        /></a>
                      </div>
                    </div>
                    <div class="doll-body swiper-slide">
                      <a href="#" class="dolls-name"
                        ><div>TC Chan</div>
                        <div>CEO</div></a
                      >
                      <div class="doll-pic">
                        <a href="#"
                          ><img src="../../assets/1110z1/images/team-dw-3.png"
                        /></a>
                      </div>
                    </div>
                    <div class="doll-body swiper-slide">
                      <a href="#" class="dolls-name"
                        ><div>Teemo B</div>
                        <div>Game Economist</div></a
                      >
                      <div class="doll-pic">
                        <a href="#"
                          ><img src="../../assets/1110z1/images/team-dw-4.png"
                        /></a>
                      </div>
                    </div>
                    <div class="doll-body swiper-slide">
                      <a href="#" class="dolls-name"
                        ><div>MaFei Y</div>
                        <div>Game Director</div></a
                      >
                      <div class="doll-pic">
                        <a href="#"
                          ><img src="../../assets/1110z1/images/team-dw-5.png"
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div class="team-swiper-pagination">
                    <div class="team-swiper-pagination-point"></div>
                    <div class="team-swiper-pagination-point"></div>
                    <div class="team-swiper-pagination-point"></div>
                    <div class="team-swiper-pagination-point"></div>
                    <div class="team-swiper-pagination-point"></div>
                  </div>
                </div>

                <div class="words">
                  HELLO!<br />
                  WE ARE CRYPTOIDIANS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
      <Header />
      <div class="swiper-button-next">
        <a class="icon" href="https://bit.ly/3IGaMWG">
          <img src="../../assets/1110z1/images/home-icon-2.png" />
        </a>
        <a class="icon" href="https://bit.ly/3GXxiJd">
          <img src="../../assets/1110z1/images/home-icon-1.png" />
        </a>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev">
        <div
          class="point"
          v-for="p in pointList"
          v-if="p.index > 0 && p.index < 6"
          :id="p.id"
          :key="p.id"
          @click="pageSlide(p.index)"
        ></div>
      </div>
    </div>
    <img
      id="coin-0"
      style="display: none"
      src="../../assets/1110z1/images/game-play2-m-1.png"
      alt=""
    />
    <img
      id="coin-1"
      style="display: none"
      src="../../assets/1110z1/images/game-play2-gold.png"
      alt=""
    />
  </div>
</template>

<script>
import Clipboard from "clipboard";
import "./index.scss";
import "./mobile.scss";
import Swiper, { Mousewheel, Pagination } from "swiper";
import "swiper/css";
Swiper.use([Mousewheel, Pagination]);

import Header from "@/components/header.vue";
import Bottom from "@/components/bottom.vue";
import config from "@/envConfig/index";

let animations = ["ease", "ease-in", "ease-in-out", "ease-out"];

export default {
  name: "test",
  data() {
    return {
      config,
      isFooter2: false,
      buttonshow: true,
      buttonshow1: true,
      videoCanplay1: false,
      showflag: false,
      checked: false,
      showflag1: false,
      checked1: false,
      videoCanplay2: false,
      videoCanplay3: false,
      videoCanplay4: false,
      translateY: 0,
      operateType: "scroll",
      mySwiper: null,
      swiperActiveIndex: 0,
      pointList: [
        { index: 0, color: "", id: "home" },
        { index: 1, color: "#1DBCB5", id: "nft" },
        { index: 2, color: "#3781E5", id: "play" },
        { index: 3, color: "#CE344A", id: "play2" },
        { index: 4, color: "#E86EA4", id: "followUs" },
        { index: 5, color: "#9C69BC", id: "partners" },
        { index: 6, color: "", id: "footer" },
        { index: 7, color: "#D3D3D3", id: "bottom" },
      ],
    };
  },
  components: {
    Swiper,
    Header,
    Bottom,
  },
  mounted: function () {
    this.coinFly();

    let videos = document.querySelectorAll("video");
    for (let i = 0; i < videos.length; i += 1) {
      videos[i].oncanplaythrough = function () {
        videos[i].muted = true;
      };
    }
    this.initSwiper();
    //初始化草地向上缩进10%
    //$(".cao").css({transform:'translateY(-9%)',transition:'all 1000ms ease'});
    //监听 天空背景移动完成以后的操作

    if (window.innerWidth < 480) {
      window.Swiper = Swiper;
      this.teamSwiper = new Swiper("#team-swiper", {
        direction: "horizontal",
        loop: true,
        mousewheel: true,
        speed: 1000,
        width: window.innerWidth,
        pagination: {
          el: ".team-swiper-pagination",
        },
      });
    }
    window.addEventListener("resize", () => {
      if (this.resize) {
        clearTimeout(this.resize);
      }
      this.resize = setTimeout(() => {
        this.mySwiper.destroy();
      }, 50);
    });
  },
  methods: {
    initSwiper: function (index) {
      const that = this;

      this.mySwiper = new Swiper("#contents", {
        initialSlide: index || 0,
        direction: "vertical", // 垂直切换选项
        // loop: true, // 循环模式选项
        mousewheel: true,
        autoHeight: true,
        speed: 1000,
        height: window.innerHeight,
        // 如果需要分页器
        pagination: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          destroy: (swiper) => {
            that.initSwiper(swiper.activeIndex);
          },
          slideChangeTransitionStart: (swiper) => {
            // swiper 开始做切换动作
            that.operateType = "scroll";
            that.translateY = 0;
          },
          sliderMove: (swiper, event) => {
            if (swiper.activeIndex == 0) {
              $("#header").css("transition", "none");
              $("#header").css(
                "transform",
                "translateY(calc(100 * var(--vh, 1) + " +
                  swiper.translate +
                  "px))"
              );
            } else if (
              swiper.activeIndex == 1 &&
              -swiper.translate < window.innerHeight
            ) {
              $("#header").css("transition", "none");
              $("#header").css(
                "transform",
                "translateY(calc(100 * var(--vh, 1) + " +
                  swiper.translate +
                  "px))"
              );
            }
          },
          touchMove: (swiper, event) => {
            that.translateY = swiper.translate;
            if (swiper.activeIndex === 0 && swiper.translate <= 0) {
              that.operateType = "touch";
            } else {
              that.operateType = "scroll";
            }
          },
          touchEnd: (swiper, event) => {
            $("#header").css("transform", "");
            $("#header").css("transition", "");
            if (swiper.activeIndex === 0) {
              // console.log("移动结束后.................", that.translateY);

              if (that.translateY < -200) {
                swiper.slideTo(1);
              }
            }
          },
          slideChange: (swiper) => {
            that.swiperActiveIndex = swiper.activeIndex;
            let headerClass = "content-header-" + swiper.activeIndex;
            let beforeHeaderClass = "content-header-0";
            let beforeBody = "body-" + (swiper.activeIndex - 1);
            let afterBody = "body-" + swiper.activeIndex;
            if ($("#body2-video1")[0]) {
              $("#body2-video1")[0].pause();
            }
            if ($("#body2-video2")[0]) {
              $("#body2-video2")[0].pause();
            }
            if ($("#body3-video1")[0]) {
              $("#body3-video1")[0].pause();
            }
            if ($("#body3-video1")[0]) {
              $("#body3-video2")[0].pause();
            }
            if (swiper.activeIndex !== 6) {
              $("#header").css({
                height: "",
                transition: "all 1s,height 0.5s ease",
              });
            }
            $(".doll").removeClass("translate");
            $("." + beforeBody)
              .find(".label")
              .addClass("translate");
            $("." + afterBody)
              .find(".label")
              .removeClass("translate");
            switch (swiper.activeIndex) {
              case 1:
                beforeHeaderClass =
                  "content-header-" + (swiper.activeIndex - 1);
                $(".body-1 .words").addClass("animate__fadeIn");
                break;
              case 2:
                beforeHeaderClass =
                  "content-header-" + (swiper.activeIndex - 1);
                setTimeout(function () {
                  if ($("#header").hasClass("content-header-2")) {
                    $("#body2-video1").trigger("play");
                    $("#body2-video2").trigger("play");
                  }
                }, 1000);
                break;
              case 3:
                beforeHeaderClass =
                  "content-header-" + (swiper.activeIndex - 1);
                setTimeout(function () {
                  if ($("#header").hasClass("content-header-3")) {
                    $("#body3-video1").trigger("play");
                    $("#body3-video2").trigger("play");
                  }
                }, 1000);
                setTimeout(function () {
                  $(".game-video img").css("opacity", "1");
                }, 2000);
                break;
              case 4:
                beforeHeaderClass =
                  "content-header-" + (swiper.activeIndex - 1);
                break;
              case 5:
                $(".doll").addClass("translate");

                beforeHeaderClass =
                  "content-header-" + (swiper.activeIndex - 1);
                break;
              case 6:
                beforeHeaderClass =
                  "content-header-" + (swiper.activeIndex - 1);
                break;
            }

            $("#header").removeClass(beforeHeaderClass);
            $("#header").addClass(headerClass);
            this.pagePointListener(swiper.activeIndex);
          },
        },
        // 如果需要前进后退按钮
      });
    },
    mouseDown: function () {},
    mouseUp: function () {},
    mouseMove: function () {},
    coinFly: function () {
      let duration = 1000;

      if (this.swiperActiveIndex == 3) {
        this.generateCoin();
        duration = Math.random() * 500 + 500;
      }
      setTimeout(this.coinFly, duration);
    },

    generateCoin: function () {
      let img = document.createElement("img");
      img.className = "flying-coin";
      let duration = Math.random() * 3000 + 3000;
      let timeFunc = animations[Math.round(duration) % 4];
      let rotate = Math.random() * 180 - 90;

      img.src = document.querySelector(
        "#coin-" + [Math.round(duration) % 2]
      ).src;
      img.style.transform = "rotateZ(" + rotate + "deg)";
      img.style.animation =
        "flyingPast " + duration + "ms " + timeFunc + " forwards";
      img.style.left = Math.random() * 93.75 + "vw";
      document.querySelector(".body-3").append(img);
      setTimeout(function () {
        img.remove();
      }, duration + 100);
      return duration;
    },

    pageSlide: function (index) {
      this.mySwiper.slideTo(index);
    },
    pagePointListener: function (index) {
      this.pointList.map((item) => {
        if (index > 0 && index < 6) {
          if (item.index === index) {
            $(".point").show();
            $(".point").css("background", "#d0d0d0");
            $(".point").css("borderColor", "#d0d0d0");
            $("#" + item.id).css("background", item.color);
            $("#" + item.id).css("borderColor", item.color);
          }
        } else {
          $(".point").hide();
        }
      });
    },

    playGameVideoStart: function (event) {
      let siblings = $(event.target).parent().siblings();
      let id = $(siblings[0]).children("video").attr("id");
      $("#" + id).trigger("play");
    },
    videoPlayEnd: function (event) {
      console.log(event);
      $(event.target).pause().currentTime(0);
    },
    videoCanplay: function (index) {
      switch (index) {
        case 1:
          this.videoCanplay1 = true;
          break;
        case 2:
          this.videoCanplay2 = true;
          break;
        case 3:
          this.videoCanplay3 = true;
          break;
        case 4:
          this.videoCanplay4 = true;
          break;
      }
    },
    swiperFooter1: function () {
      if (this.isFooter2) {
        //goto footer 1
        this.isFooter2 = false;
        this.mySwiper.enable();
      } else {
        // goto footer 2
        this.isFooter2 = true;
        this.mySwiper.disable();
      }
    },
    playOrPause: function (e) {
      if ($(e.target).find("video").prop("paused")) {
        $(e.target).addClass("paused");
      } else {
        $(e.target).removeClass("paused");
      }
    },
    copyCode: function (id, text) {
      const clipboard = new Clipboard(id, { text: () => text });
      clipboard.on("success", (e) => {
        console.log(e.text);
        if (e.text === "0xF35aee66AB0D099aF233c1ab23E5f2138B0ED15B") {
          this.buttonshow = false;
          this.showflag = true;
          this.checked = true;
          console.log("ok1");
        } else if (e.text === "0x5B7D8a53E63F1817B68d40DC997cB7394dB0ff1a") {
          this.buttonshow1 = false;
          this.checked1 = true;
          this.showflag1 = true;
          console.log("ok2");
        }
        clipboard.destroy();
        setTimeout(() => {
          this.showflag = false;
          this.checked = false;
          this.showflag1 = false;
          this.checked1 = false;
          this.buttonshow = true;
          this.buttonshow1 = true;
        }, 2000);
        // window.alert("Successfully copied");
      });
      clipboard.on("error", (e) => {
        // ("复制失败");
        clipboard.destroy();
        window.alert("Failed copied");
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
