<template>
  <div class="container">
    <h1>OUR DEVELOPERS</h1>
    <p></p>
    <h2>TEAM LEADER</h2>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <img src="@/assets/books.png" alt id="t" />
        </b-col>
        <b-col id="col">
        
          <b-card
            title="Card Title"
            img-src="/img/pro/nand.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button href="#" variant="primary">Portfolio</b-button>
          </b-card>
        </b-col>
        <b-col>
          <img src="@/assets/q.jpg" alt id="su" />
        </b-col>
      </b-row>
      <p></p>
      <h2>WEB DEVELOPERS</h2>
      <p></p>
      <p></p>
      <b-row>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button href="#" variant="primary">Portfolio</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Portfolio</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Portfolio</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <p></p>
    <h2>APP DEVELOPERS</h2>
    <p></p>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Portfolio</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Portfolio</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Portfolio</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style >
#col{
 text-align: center;
}
#t {
  padding-right: 100px;
  padding-left: 0px;  
  height: 250px;
  width: 280px;
  text-align: center;
}
#su {
  height: 350px;
  width: 330px;
  border-radius: 100px;
}
.container {
  text-align: center;
}
h1,
h2,
h2 {
  color: rgb(10, 28, 131);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

</style>
<script>
export default {
  name: "team"
};
</script>