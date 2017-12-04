<template>
	<article id="ember6522" class="posts__post l-mobile-gutter ember-view" :class="post.slug">
    	<h2 class="posts__post__title"> 
    		<router-link class="posts__post__title__link t-article-headline-link ember-view" :class="post.slug" :to="{ name: 'blogPosts', params: { slug: post.slug } }">
    			    {{ post.title }}
			</router-link>
		</h2>
		<p class="posts__post__body t-body">{{ post.subtitle }}</p>
		<div class="post__data">
			<span class="post__data__author">By: 
			  	<get-author-link :authorId="post.authors"></get-author-link>
			</span>
			<time id="ember6525" class="post__data__date ember-view">{{ post.date }} </time>
		</div>
	</article>
</template>

<script>
import getAuthorLink from '@/components/navigation/get-author-link.vue'

export default {
  name: 'CategoryCount',
  props: {
    post: {
      type: Object,
      defoult: null
    }
  },
  components: {
    getAuthorLink
  }
}
</script>

<style>
	
</style>