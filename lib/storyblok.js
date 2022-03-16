import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: '5HjUrjCQsr8KPwu2QYCkLwtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok
