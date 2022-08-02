<script>
    export let id;
</script>

<figure>
    <iframe
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
</figure>

<style>
    figure {
        background-color: black;
        padding: 1em 2em;
        margin: 0;
        justify-content: center;
    }

    figure iframe {
        height: 24em;
        width: 100%;
    }
</style>
