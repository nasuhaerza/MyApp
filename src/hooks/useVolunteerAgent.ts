export default function useVolunteerAgent(
  volunteerSkills: string[],
  requests: any[],
) {

  return requests
    .map((request: any) => {

      let score = 0;

      if (
        volunteerSkills.includes(
          request.subject_needed
        )
      ) {
        score += 50;
      }

      if (
        request.urgency === 'Urgent'
      ) {
        score += 30;
      }

      return {
        ...request,
        matchScore: score,
      };
    })

    .sort(
      (a, b) =>
        b.matchScore - a.matchScore
    );
}