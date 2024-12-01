import React from "react";
import gymImage from "./assets/gym mangement.jpeg"; // Import your image here
import gym from "./assets/gym.jpeg";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to FitLife Gym</h1>
      <h3>
        Your ultimate fitness destination for a healthier and stronger you.
      </h3>

      {/* Gym Image */}
      <img
        src={gymImage}
        alt="State-of-the-art Gym Facilities"
        className="home-image"
      />
      <br />
      <p>
        Our gym offers a wide variety of equipment, certified personal trainers,
        and a motivating environment to help you achieve your fitness goals.
        Whether you're a beginner or a seasoned athlete, we have everything you
        need to train, improve, and excel. From cardio to strength training,
        yoga, and group fitness classes, our facility is designed to cater to
        all your fitness needs. Join us today and experience the difference!
      </p>
      <br />
      <h3>Why Choose Our Gym?</h3>
      <ul>
        <li>
          <strong>Wide Variety of Equipment:</strong> We offer the latest and
          most diverse fitness equipment to suit all your training needs.
        </li>
        <li>
          <strong>Certified Personal Trainers:</strong> Our experienced trainers
          provide personalized guidance to help you reach your fitness goals
          safely and effectively.
        </li>
        <li>
          <strong>Holistic Fitness Approach:</strong> We focus on both physical
          training and mental well-being to ensure a balanced and sustainable
          fitness journey.
        </li>
        <li>
          <strong>Tailored Workout Plans:</strong> Personalized workout plans
          designed to match your goals, whether it’s weight loss, muscle gain,
          or overall fitness improvement.
        </li>
        <li>
          <strong>Spacious and Modern Facilities:</strong> Enjoy a clean,
          spacious environment with state-of-the-art equipment for a seamless
          workout experience.
        </li>
        <li>
          <strong>Group Classes and Yoga:</strong> Participate in motivating
          group fitness classes, including yoga, Zumba, strength training, and
          more.
        </li>
        <li>
          <strong>Nutrition and Fitness Guidance:</strong> Our expert coaches
          offer insights into fitness and nutrition to help you make healthy
          lifestyle choices.
        </li>
        <li>
          <strong>Regular Fitness Events:</strong> Join fitness challenges,
          workshops, and events to stay motivated and connect with the gym
          community.
        </li>
        <li>
          <strong>Supportive and Friendly Community:</strong> Be part of a
          welcoming environment where everyone encourages each other to reach
          their fitness goals.
        </li>
      </ul>
      <br />
      <img
        src={gym}
        alt="State-of-the-art Gym Facilities"
        className="home-image"
      />
      <h3>Explore Our Amenities</h3>
      <p>
        <strong>Cardio Zone:</strong> High-tech treadmills, bikes, and rowing
        machines for a perfect cardio session.
        <br />
        <strong>Strength Training:</strong> Free weights, resistance machines,
        and more for building muscle.
        <br />
        <strong>Relaxation Areas:</strong> Chill out post-workout in our lounge
        or recovery zones.
        <br />
        <strong>Nutrition Guidance:</strong> Access to dietary plans and
        consultations with nutritionists.
      </p>
      <br />
      <h3>Upcoming Events</h3>
      <p>
        <strong>Fitness Challenge 2024:</strong> A six-week challenge to
        transform your fitness level.
        <br />
        <strong>Yoga Retreat:</strong> Join us for a calming weekend filled with
        yoga and mindfulness.
        <br />
        <strong>Community Run:</strong> Participate in a fun, inclusive 5k run
        organized by the gym.
      </p>
      <br />
      <p>
        With top-of-the-line equipment, spacious workout areas, and a friendly,
        welcoming atmosphere, you'll feel right at home here. Whether you're
        looking to lose weight, build muscle, or simply maintain an active
        lifestyle, we have something for everyone.
      </p>

      <p>
        Our gym is more than just a place to work out—it's a community. Join a
        like-minded group that shares your passion for fitness and healthy
        living. Let's work together to transform your fitness journey!
      </p>
      <br />
      <button className="button">Join Us</button>
    </div>
  );
};

export default Home;
