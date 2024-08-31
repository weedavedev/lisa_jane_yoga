<script>
    import {mediaSource} from '$lib/constants';

    let media_base = mediaSource;
    let social_channels = ['email', 'facebook', 'instagram', 'youtube'];
</script>

<style lang="postcss">
    .main_page_content {
        height: 100vh;
        flex: 1; /* Each column takes equal space */
        min-width: 365px; /* Minimum column width */
        max-width: 50%;
        max-height: 100%;

        @apply text-center;
        display: flex; /* Set to flexbox */
        flex-direction: column; /* Stacking items vertically */
    }

    .main_page_content > .centered {
        margin: 10vh auto;
    }
    .main_page_content ul, .main_page_content p {
        margin-bottom: 10%;
    }
    .gonw {
        background-color: rgba(255, 255, 255, 0.82);
        color: rgb(60, 107, 59);
    }

    .wong {
        background-color: rgba(76, 133, 75, 0.53);
        color: rgba(255, 255, 255);
    }

    .full {
        width: 100%;
    }

    .tall {
        flex-grow: 1
    }

    .content_header  {
        @apply  flex justify-center items-center;
        top: 0; /* Stick to the top of the column */
        padding: 5px 0;
        height: 10vh; /* Space between boxes */
        /*flex-grow: 1;*/
    }

    .box {
        padding: 1% 3%;
        @apply rounded-md;
    }

    .about_me_text {
        flex-grow: 1;
        height: 80vh;
        overflow: auto; /* Enable scrolling */
    }

    .content_footer {
        /* Space between boxes */
        bottom: 0;
        height: 10vh;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 768px) {
        .main_page_content {
            max-width: 100%; /* Stack columns full width on small screens */
        }
    }
</style>

<div class="main_page_content left top">
    <div class="content_header gonw full">
        <h1>Lisa Jane Yoga</h1>
    </div>
    <div class="box gonw centered">
        <h4>Yoga and Tai Chi classes</h4>
        <h4>Group and private</h4>
        <h4>In person and online</h4>
    </div>
    <div class="box gonw centered">
        <h3>More info / connect via</h3>
        <div class="social_container">
            {#each social_channels as channel}
                <img class="socials" src={`${media_base}/logos/${channel}.png`} alt={channel}/>
            {/each}
        </div>
    </div>
</div>
<div class="main_page_content right bottom">
    <div class="content_header gonw full">
        <h2>About me</h2>
    </div>
    <div class="about_me_text full tall wong">
        <p>Hi, I’m Lisa, a teacher with over 10 years experience working with adults and children in various settings
            including yoga studios, yoga teacher trainings, gyms, Summer camps, primary classrooms and prisons.</p>
        <ul>
            <li>Les Mills Body Balance Instructor</li>
            <li>Gym Instructor level 2 qualified</li>
            <li>RYS 200hr Hatha Yoga Teacher</li>
            <li>Tai Chi Instructor</li>
            <li>PGDE Primary Education</li>
        </ul>
        <p>I enjoy teaching creative combinations of Yoga and Tai Chi as well as workshops focused on demostrating the
            practical applications of deeper yogic philosophy.</p>
        <p>For me yoga and tai chi are a playful practice of reconnecting with the self; building a dialogue of kindness
            and enquiry with the parts of usthat we have a troubled relationship with or have forgotten
            altogether. Honouring the body where it is and breathing into areas of tension in order to remember the truth
            of our prefection.</p>
    </div>
    <div class="full content_footer gonw">
        <p>Get in touch to discuss how I can help you/your group explore the joy of moving with the body and deepening
            the connection to the self</p>
    </div>
</div>

