<template>
  <div class="container" id="main-cont">
    <form @submit.prevent="submitReview">
      <div class="form-group">
        <label for="choice">Country</label>
        <select v-model="reviewData.choice" class="form-control" id="choice" name="choice" required>
          <option value="" disabled>Select country</option>
          <option value="1">Slovakia</option>
          <option value="2">United Kingdom</option>
          <option value="3">Czech Republic</option>
          <option value="4">Germany</option>
          <option value="5">France</option>
          <option value="6">Croatia</option>
        </select>
      </div>
      <br/>
      <div class="rating-box">
        <div class="stars">
          <h5>Rate us!</h5>
          <svg
              v-for="(star, index) in 5"
              :key="index"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              :class="{'active': index < reviewData.rating}"
              @click="setRating(index + 1)"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
          >
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
        </div>
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea v-model="reviewData.comment" class="form-control" id="comment" rows="5" name="review"
                  required></textarea>
      </div>
      <div>
        <label class="switch">
          <input type="checkbox" v-model="reviewData.agree" required/>
          <span class="slider round"></span>
        </label>
        <p>I agree with my personal data being used for marketing purposes</p>
      </div>
      <br/>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>

    <!-- Use Popup component here -->
    <Popup :visible="showPopup" @update:visible="showPopup = $event" message="Thank you for your feedback!" />
  </div>
</template>

<script>
import { handleStarClick } from "@/utils/rating";
import Popup from "@/components/Popup.vue";

export default {
  components: {
    Popup,
  },
  data() {
    return {
      reviewData: {
        choice: "",
        rating: 0,
        comment: "",
        agree: false,
      },
      showPopup: false,
    };
  },
  methods: {
    setRating(rating) {
      this.reviewData.rating = rating;
    },
    async submitReview() {
      try {
        if (!this.reviewData.agree) {
          alert("You must agree to the terms to submit a review.");
          return;
        }

        console.log("Sending data:", this.reviewData);

        const response = await fetch("http://localhost/eshop/submit-review.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            choice: this.reviewData.choice,
            rating: this.reviewData.rating,
            comment: this.reviewData.comment,
          }),
        });

        const result = await response.json();

        if (result.success) {
          this.showPopup = true;
          this.reviewData = { choice: "", rating: 0, comment: "", agree: false };
        } else {
          alert(result.error || "Error");
        }
      } catch (error) {
        console.error("Error submitting review:", error);
        alert("Error");
      }
    },
  },
  mounted() {
    const stars = document.querySelectorAll(".stars svg");
    handleStarClick(stars, (rating) => {
      this.reviewData.rating = rating;
    });
  },
};
</script>

<style scoped>
h5 {
  font-weight: bold;
  color: white;
  font-size: 25px;
  margin-right: 50px;
  margin: auto;
}

.rating-box {
  background-color: #343a40;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rating-box .stars {
  display: flex;
  gap: 25px;
  padding: 5px;
  align-items: center;
  justify-content: center;
}

.stars svg {
  color: beige;
  font-size: 35px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.stars svg.active {
  color: orange;
}

/* Form styles */
.form-group {
  margin-bottom: 20px;
}

textarea {
  resize: none;
}

button {
  margin-top: 20px;
}

/* Switch styles */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: darkgreen;
}

input:focus + .slider {
  box-shadow: 0 0 1px darkgreen;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

#popup button {
  margin-top: 20px;
}
</style>