function onLoadFunction() {
    gapi.client.setApiKey('AIzaSyB25VIjTysITGdtbaViTjOyN-k_FVht-V4');

    gapi.client.load('plus', 'v1', function () {});
}