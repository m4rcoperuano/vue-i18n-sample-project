<template>
    <div>
        <h1>{{ $t('title') }}</h1>
        <p>{{ $t('content.whatThisIsFor') }}</p>
        
        <button @click="toggleLanguage">
            {{ $t('buttons.changeLanguage', { lang: this.changeLanguageToLang() }) }}
        </button>
    </div>
</template>

<script>
    export default {
        i18nOptions: {
            namespaces: '_common',
            keyPrefix: 'pages.home'
        },
        methods: {
            toggleLanguage() {
                if (this.$i18n.i18next.language === 'en') {
                    this.$i18n.i18next.changeLanguage('es');
                }
                else {
                    this.$i18n.i18next.changeLanguage('en');
                }
            },
            changeLanguageToLang() {
                return this.$i18n.i18next.language === 'en' ?
                    'Spanish' :
                    'English';
            }
        }
    }
</script>

<style scoped>

</style>