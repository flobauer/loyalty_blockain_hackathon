import Layout from "../components/Layout";
import Button from "../components/Button";
import Label from "../components/Label";

export default function About() {
  const team = [
    {
      name: "Sarah",
      image:
        "https://cat-avatars.vercel.app/api/cat?name=fc78a68262dba81dd021cc35f7f77c39c0117ddd9637043c607817c93c92ec7e",
      description: "Frontend Development & User Experience Design",
    },
    {
      name: "Florian",
      image:
        "https://cat-avatars.vercel.app/api/cat?name=fc78a68262dba81dd021cc35f7f77c39c0117ddd9637043c607817c93c92ec7e",
      description: "Nostr protocol & Business Development",
    },
    {
      name: "Tosh",
      image:
        "https://cat-avatars.vercel.app/api/cat?name=fc78a68262dba81dd021cc35f7f77c39c0117ddd9637043c607817c93c92ec7e",
      description: "Customer Support & Copywriting",
    },
  ];

  return (
    <Layout title="About" back={true}>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col space-y-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 pb-5 pt-5"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
