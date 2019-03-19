<template>
    <div>
        <h1>{{ $t('_common:pages.home.title') }}</h1>
        <p>{{ $t('_common:pages.home.content.whatThisIsFor') }}</p>
        
        <button @click="toggleLanguage">
            {{ $t('_common:pages.home.buttons.changeLanguage', { lang: this.getNewLanguageToChangeTo() }) }}
        </button>
    </div>
</template>

<script>
    export default {
        // i18nOptions: {
        //     namespaces: '_common',
        //     keyPrefix: 'pages.home'
        // },
        methods: {
            toggleLanguage() {
                if (this.$i18n.i18next.language === 'en') {
                    this.$i18n.i18next.changeLanguage('es');
                }
                else {
                    this.$i18n.i18next.changeLanguage('en');
                }
            },
            getNewLanguageToChangeTo() {
                return this.$i18n.i18next.language === 'en' ?
                    'Spanish' :
                    'English';
            }
        }
    }
</script>

<style scoped>

</style>