<script>
      import '../app.css';
      import FaRegUserCircle from 'svelte-icons/fa/FaRegUserCircle.svelte';
      import IoLogoGameControllerB from 'svelte-icons/io/IoLogoGameControllerB.svelte'
      import FaCubes from 'svelte-icons/fa/FaCubes.svelte'
</script>

<head>
      <title>Daimon</title>
  </head>
  <main>
      <div class='bg'>
      </div>
      <div class="service-title">
          <h1>Daimon</h1>
          <div class="pill">
              <p>INDEV</p>
          </div>
          <p class="message">I have midterms, will update soon.</p>
      </div>
      <div class="dashboard">
            <slot />
      </div>
      <div class="sbar-icons">
            <div class="sbaricon">
                    <a href="/" class="sbar-icon">
                        <IoLogoGameControllerB style="color: white; " class="sbar-icon"/>
                    </a>
            </div><br>
            <div class="sbaricon">
                  <a href="/mods" class="sbar-icon">
                      <FaCubes style="color: white; " class="sbar-icon"/>
                  </a>
          </div><br>
          <div class="sbaricon">
            <a href="/settings" class="sbar-icon">
                <FaRegUserCircle style="color: white; " class="sbar-icon"/>
            </a>
          </div>
      </div>
  </main>
  <style>
      .sbar-icons {
              margin-top: 1rem;
              margin-left: 5rem;
              margin-right: 4rem;
              background-color: #2b2b2b;
              width: fit-content;
              border-radius: 10px;
              padding: 0.5rem;              
      }
      .pill {
          border-radius: 15px;
          width: 50px;
          text-align: center;
          padding-left: 5px;
          padding-right: 5px;
          font-size: small;
      }
      .service-title .pill {
          background-color: #5a0000;
  
          transform: translateX(325%);
          margin-top: -6rem;
      }
      .dashboard {
        border-radius: 10px;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
      }
      .bg {
          background-image: url(/images/background.webp);
          background-size: cover;
          background-position: center;
          height: 100vh;
          width: 100vw;
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
          filter: blur(5px);
      }
      main {
          color: #fff;
      }
      .sbaricon {
              width: 2.5rem;
              height: 2.5rem;
      }
      .sbar-icon {
            color: white;
            transition: 500ms;
      }
      .sbar-icon:hover {
            color: rgb(13, 245, 137);
            transition: 500ms;
      }
      .service-title {
          font-family: 'NotoSansJP-Black';
          font-size: 1.5rem;
          margin-left: 5rem;
      }
      .service-title .message {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 15px;
          margin-top: 2.5rem;
          margin-left: 0.2rem;
      }
  </style>