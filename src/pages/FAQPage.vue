<template>
  <div class="container" id="qaa-cont">
    <h1 style="margin-bottom: 30px">Frequently Asked Questions</h1>
    <List :items="accordionItems">
      <template #item-content="{ item, index }">
        <div class="accordion" :id="'accordion-' + index">
          <div class="card no-border">
            <div class="card-header no-border" :id="'heading-' + index">
              <h2 class="mb-0">
                <button
                    class="accordion-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse-' + index"
                    aria-expanded="false"
                    :aria-controls="'collapse-' + index"
                >
                  {{ item.title }}
                </button>
              </h2>
            </div>
            <div
                :id="'collapse-' + index"
                class="collapse"
                :aria-labelledby="'heading-' + index"
                data-parent="#accordionExample"
            >
              <div class="card-body">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </List>
    <br><br><br>
    <h2>Do you have other questions? Send them our way, and we’ll be sure to answer!</h2>
    <textarea class="form-control" id="comment" rows="5"></textarea>
    <br>
    <button type="submit" class="btn btn-dark">Submit</button>
  </div>
</template>


<script>
import List from "@/components/List.vue";
export default {
  name: "AccordionPage",
  components: {
    List,
  },
  data() {
    return {
      accordionItems: [
        {
          title: "Who are we?",
          content: "We are the leading world-known home security providers, ensuring your home stays safe all year long.",
        },
        {
          title: "Where do we ship from?",
          content: "Our warehouse is in Nitra, Slovakia. Shipping in Europe takes 3-4 days. Worldwide shipping takes less than two weeks.",
        },
        {
          title: "How can I order?",
          content: "Head to our shop or check your cart to find products available for purchase.",
        },
        {
          title: "Where can I change my shipping information?",
          content: "Update your shipping info during checkout or save it in your profile for future orders.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}

.card.no-border {
  border: none;
  background-color: white;
}

.card-header.no-border {
  border: none;
  padding-left: 20px;
  background-color: white;
}

.accordion-btn {
  display: block;
  width: 100%;
  text-align: left;
  font-weight: bold;
  color: black;
  text-decoration: none;
  background: none;
  border: none;
  outline: none;
  padding: 10px 0;
}

.accordion-btn:hover {
  color: limegreen;
}



.card-body {
  font-size: 20px;
  font-weight: bold;
  padding: 15px 25px;
  line-height: 1.6;
  color: #333;
}
</style>

