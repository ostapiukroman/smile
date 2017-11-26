<template>
  <div class="l-background-wrap-light">
    <section class="l-section work__items">
    	<router-link v-for="(subpage, index) in subpages" :key="subpage.slug" class="l-section__wrap ember-view" v-bind:class="subpage.slug" :to="{ name: 'subWork', params: { slug: subpage.slug } }">
    		<div class="section__thin section__thin--align-top l-mobile-gutter">
			  <h3 class="t-display">{{subpage.title}}</h3>
			  <p class="t-body">{{subpage.desc}}</p>
			  <p class="t-body t-link t-link--icon-after">
			    Read case study
			    <arrow-right />
			  </p>
			</div>
			<div class="section__wide">
			  <div class="l-card l-card-showcase-media l-card--orange">
			    <div class="img-wrap">
			      <img v-bind:src="images[index]" alt="">
			    </div>
			  </div>
			</div>
    	</router-link>
    </section>
  </div>
</template>

<script>
import arrowRight from '../components/icons/arrowLeft.vue'
import serviceData from '../resource/services.json'

export default {
  name: 'Work',
  data () {
    return {
      subpages: serviceData.work,
      images: ['../assets/flywheel-card.jpg', '../assets/flywheel-card.jpg', '../assets/flywheel-card.jpg'],
      fileWay: null
    }
  },
  components: {
    arrowRight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
img{
    max-width: 100%;
}
.l-background-wrap-light {
    background-color: #f8f8f8;
    color: #343434;
}
.l-section__wrap {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
}
.section__thin--align-top, .section__wide--align-top {
    -ms-flex-item-align: start;
    align-self: flex-start;
}
.t-display {
    line-height: 1.066em;
}
.t-display, strong {
    font-weight: 700;
}
.t-body, .t-copy {
    font-size: 1.125em;
    line-height: 1.666em;
}
.t-body+.t-body {
    margin-top: 1.111em;
}
.t-link--icon-after {
    line-height: 1em;
}
.t-link {
    border-bottom: 1px dotted #424242;
    transition: .2s ease border-bottom,.2s ease color;
}
.icon-chevron-down, .icon-chevron-left, .icon-chevron-right {
    fill: transparent;
    transition: .2s ease transform,.2s ease stroke;
}
.t-link--icon-after .icon-svg, .t-link--icon-before .icon-svg {
    height: .722em;
    width: .444em;
    stroke: #343434;
    transition: .2s ease transform,.2s ease stroke;
}
.t-link--icon-after .icon-svg {
    margin-left: 20px;
}
.t-link--icon-after, .t-link--icon-before {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: baseline;
    align-items: baseline;
    border-bottom: 0;
}
.work__items .t-body:not(.t-link) {
    margin-bottom: 24px;
}
.l-section, .l-section-landing, .l-section-no-mobile-gutter, .l-section-vanilla, .l-section-wide-image, .l-sub-section, .l-sub-section-no-mobile-gutter {
    max-width: 1320px;
    margin-right: auto;
    margin-left: auto;
}
.l-section, .l-section-landing, .l-section-no-mobile-gutter, .l-sub-section, .l-sub-section-no-mobile-gutter {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.l-card:not(.l-card--full-img) {
    transition: .2s ease margin-left;
}
.work__items .l-card {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}	
.flywheel .l-card {
    background: #ff9e6a;
}
.mcgraw-hill-education .l-card{
	background: #93e9f3;
}
.learnivore .l-card{
	background: #9ccc65;
}
.l-section__wrap:hover .l-card {
    box-shadow: inset 0 0 0 1px #000;
}
.l-section__wrap:hover .icon-chevron-right{
    transform: translateX(10px);
}
@media (min-width: 1150px) {
.t-display {
    font-size: 3.75em;
}
}
@media (min-width: 600px) {
.work__items .l-card {
    padding: 40px 60px;
}	
}
@media (min-width: 800px) {
	.l-section, .l-section-no-mobile-gutter, .l-section-vanilla, .l-sub-section, .l-sub-section-no-mobile-gutter {
    padding-top: 80px;
    padding-bottom: 80px;
}
.l-card-showcase-media {
    height: 39vw;
    max-height: 450px;
}
.l-section, .l-section-landing, .l-section-vanilla, .l-sub-section {
    padding-right: 60px;
    padding-left: 60px;
}
.l-card-showcase-media {
    height: 39vw;
    max-height: 450px;
}
	.section__thin {
    width: calc(40% - 60px);
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.work__items .t-display {
    margin-top: 40px;
}
.work__items .t-display {
    margin-bottom: 10px;
}
.section__wide {
    width: 60%;
}
}
.l-section__wrap + .l-section__wrap{
	margin-top: 80px
}
.l-section__wrap:nth-child(2n){
	flex-direction: row-reverse;
}
.l-section__wrap:nth-child(2n) .section__thin{
	margin-right:0px !important;
}
</style>
