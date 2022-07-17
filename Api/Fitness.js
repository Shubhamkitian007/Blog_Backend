const get = (request, response) =>{
    response.send([
        {
            id: 13,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "fitness",
            details: "Twenty five pushups a day keep a doctor away",
            name: "Pushups",
            image:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/images/slideshow2/classic-483x350-1-1492801201.jpg?resize=480:*",
            content:
              "A push-up (sometimes called a press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole. Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, and some martial arts disciplines.According to the study published in Journal of Strength and Conditioning Research, the test subjects supported with their hands, on average, 69.16% of their body mass in the up position, and 75.04% in the down position during the traditional push-ups. In modified push-ups, where knees are used as the pivot point, subjects supported 53.56% and 61.80% of their body mass in up and down positions, respectively.",
          },
          {
            id: 14,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "fitness",
            details: "Reduce your belly in one week and become confident",
            name: "Squats",
            image:
              "https://43nnuk1fz4a72826eo14gwfb-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/ArmStanding.jpg",
            content:
              "The movement begins from a standing position. Weight is often added; typically in the form of a loaded barbell, but dumbbells and kettlebells may also be used. When a barbell is used, it may be braced across the upper trapezius muscle, which is termed a high bar squat, or held lower across the rear deltoids, termed a low bar squat.[3] The movement is initiated by moving the hips back and bending the knees and hips to lower the torso and accompanying weight, then returning to the upright position.As the body descends, the hips and knees undergo flexion, the ankle extends (dorsiflexes) and muscles around the joint contract eccentrically, reaching maximal contraction at the bottom of the movement while slowing and reversing descent. The muscles around the hips provide the power out of the bottom. If the knees slide forward or cave in then tension is taken from the hamstrings, hindering power on the ascent. Returning to vertical contracts the muscles concentrically, and the hips and knees undergo extension while the ankle plantarflexes.Common errors of squat form include descending too rapidly and flexing the torso too far forward. Rapid descent risks being unable to complete the lift or causing injury. This occurs when the descent causes the squatting muscles to relax and tightness at the bottom is lost as a result. Over-flexing the torso greatly increases the forces exerted on the lower back, risking a spinal disc herniation.[3] Another error is when the knee is not aligned with the direction of the toes, entering a valgus position, which can adversely stress the knee joint. An additional common error is the raising of heels off the floor, which reduces the contribution of the gluteus muscles.",
          },
          {
            id: 15,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "fitness",
            details: "Increase your muscle mass to build up strength",
            name: "Lunges",
            image:
              "https://experiencelife.lifetime.life/wp-content/uploads/2021/03/The_Lunge-1280x720.jpg",
            content:
              "The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout. In addition, varying your technique allows you to emphasize different muscles or parts of those muscles.This exercise is beneficial for injury prevention, as well as rehabilitation after injuries occur. It’s often part of a foundational strength program or rehab protocol, allowing athletes and exercisers to return to their sport or activity of interest as quickly as possible.For instance, it’s a common position people assume to get up from the ground, and it mimics many of the movements and muscle-activation patterns of daily activities, such as walking and running and ascending or descending stairs.",
          },
          {
            id: 16,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "fitness",
            details: "Tips to improve your body balance and posture",
            image: "https://blog-images.pharmeasy.in/2021/01/06152556/3.jpg",
            name: "Plank",
            content:
              "The plank is an excellent abdominal and core exercise. To ensure you keep your core strong and stable, add the plank to your ab workout program.Strengthening the core is an important aspect of any workout regimen. A strong and solid core looks and feels good. But more importantly, it helps to stabilize, balance, and power the body during just about every other activity.Core strength is the basis for all coordinated and powerful athletic movements. A strong core can reduce stress on the joints and allow you to achieve better posture.",
          },
      
    ])
}

module.exports.apiController = get;