import Layout from "../components/Layout";
import Button from "../components/Button";
import Label from "../components/Label";

export default function About() {
  const team = [
    {
      name: "Sarah",
      image:
        "https://cat-avatars.vercel.app/api/cat?name=fc78a68262dba81dd021cc35f7f77c39c0117ddd9637043c607817c9c92ec7e",
      description: "Frontend Development & User Experience Design",
    },
    {
      name: "Florian",
      image:
        "https://cat-avatars.vercel.app/api/cat?name=fc78a68262dba81dd021cc35f7f77c39c0117ddd9637043c607817c93c92c7e",
      description: "Nostr protocol & Business Development",
    },
    {
      name: "Tosh",
      image:
        "https://cat-avatars.vercel.app/api/cat?name=fc78a68262dba81dd021cc35f7f77c39c0117dd9637043c607817c93c92ec7e",
      description: "Customer Support & Copywriting",
    },
  ];

  return (
    <Layout title="About" back="/profile">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col gap-4 divide-y-2">
          <p className="pt-8">
            This is a project of the Loyalty Hackathon of RBI on the 25.03.2023
            at Vienna, Austria.
            <br />
            <a
              href="https://www.loyaltyhackathon.com"
              target="_blank"
              className="text-blue-600 hover:underline">
              More info
            </a>
          </p>
          <h3 className="pt-8 font-bold">Team 2D</h3>
          {team.map((member, index) => (
            <div key={index} className="flex gap-4 p-5">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
