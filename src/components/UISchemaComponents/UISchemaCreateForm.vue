<script setup>

import { defineProps } from 'vue';
const props = defineProps({
    id: ['id']
})

</script>

<template>
    <h1>UI Schema Form</h1>
    <form class="border border-dark p-3">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="nameHelp">
        </div>
        <div class="mb-3">
            <label for="textColorPrimary" class="form-label">Text Color Primary</label>
            <input type="text" class="form-control" id="textColorPrimary" aria-describedby="textColorPrimaryHelp">
        </div>
        <div class="mb-3">
            <label for="textColorSecondary" class="form-label">Text Color Secondary</label>
            <input type="text" class="form-control" id="textColorSecondary" aria-describedby="textColorSecondaryHelp">
        </div>
        <div class="mb-3">
            <label for="textColorTertiary" class="form-label">Text Color Tertiary</label>
            <input type="text" class="form-control" id="textColorTertiary" aria-describedby="textColorTertiaryHelp">
        </div>
        <div class="mb-3">
            <label for="textColorTertiaryLight" class="form-label">Text Color Tertiary Light</label>
            <input type="text" class="form-control" id="textColorTertiaryLight" aria-describedby="textColorTertiaryLightHelp">
        </div>
        <div class="mb-3">
            <label for="textColorTertiaryDark" class="form-label">Text Color Tertiary Dark</label>
            <input type="text" class="form-control" id="textColorTertiaryDark" aria-describedby="textColorTertiaryDarkHelp">
        </div>
        <div class="mb-3">
            <label for="textColorTertiary" class="form-label">Text Color Tertiary</label>
            <input type="text" class="form-control" id="textColorTertiary" aria-describedby="textColorTertiaryHelp">
        </div>
        <div class="mb-3">
            <label for="backgroundColorPrimary" class="form-label">Background Color Primary</label>
            <input type="text" class="form-control" id="backgroundColorPrimary" aria-describedby="backgroundColorPrimary">
        </div>
        <div class="mb-3">
            <label for="backgroundColorSecondary" class="form-label">Background Color Secondary</label>
            <input type="text" class="form-control" id="backgroundColorSecondary" aria-describedby="backgroundColorSecondary">
        </div>
        <div class="mb-3">
            <label for="backgroundColorTertiary" class="form-label">Background Color Tertiary</label>
            <input type="text" class="form-control" id="backgroundColorTertiary" aria-describedby="backgroundColorTertiary">
        </div>
        <div class="mb-3">
            <label for="backgroundColorTertiaryLight" class="form-label">Background Color Tertiary Light </label>
            <input type="text" class="form-control" id="backgroundColorTertiaryLight" aria-describedby="backgroundColorTertiaryLight">
        </div>
        <div class="mb-3">
            <label for="backgroundColorTertiaryDark" class="form-label">Background Color Tertiary Dark</label>
            <input type="text" class="form-control" id="backgroundColorTertiaryDark" aria-describedby="backgroundColorTertiaryDark">
        </div>
        <div class="mb-3">
            <label for="primaryFontFamily" class="form-label">Primary Font Family</label>
            <input type="text" class="form-control" id="primaryFontFamily" aria-describedby="primaryFontFamily">
        </div>
        <div class="mb-3">
            <label for="secondaryFontFamily" class="form-label">Secondary Font Family</label>
            <input type="text" class="form-control" id="secondaryFontFamily" aria-describedby="secondaryFontFamily">
        </div>
        <div class="mb-3">
            <label for="tertiaryFontFamily" class="form-label">Tertiary Font Family</label>
            <input type="text" class="form-control" id="tertiaryFontFamily" aria-describedby="tertiaryFontFamily">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>