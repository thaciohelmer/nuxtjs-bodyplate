// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { lang: 'pt-br' },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        }
    },
    srcDir: './src',
    runtimeConfig: {},
    components: [{ path: '~/components', prefix: 'app' }],
    modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/google-fonts', '@primevue/nuxt-module'],
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'last' }],
        configPath: './tailwind.config.js',
        editorSupport: true,
        viewer: false
    },
    vueuse: {
        autoImports: true
    },
    googleFonts: {
        families: {}
    },
    primevue: {
        importTheme: { from: '~/theme-preset.ts' },
        options: {
            pt: {
                global: {
                    css: `
                        .p-inputtext {
                            width: 100%;
                        }
                    `
                }
            }
        }
    }
})
