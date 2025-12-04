import { useEffect, useState } from "react";
import "./Students.css";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading student JSON:", err));
  }, []);

  if (loading) return <h2 className="loading">Loading student roster...</h2>;

  return (
    <div className="students-container">
      <h1>ITIS 3135 Class Roster</h1>

      <div className="students-grid">
        {students.map((s) => (
          <div className="student-card" key={s.prefix}>

            <h2>
              {s.name.first}{" "}
              {s.name.middleInitial && s.name.middleInitial + "."}{" "}
              {s.name.last}
            </h2>

            {s.name.preferred && (
              <p className="preferred">(Preferred: {s.name.preferred})</p>
            )}

            {s.media?.hasImage && (
              <img
                src={`https://dvonb.xyz${s.media.src}`}
                alt={s.media.caption}
                className="student-img"
              />
            )}

            <p><strong>Personal Statement:</strong> {s.personalStatement}</p>

            <p><strong>Personal Background:</strong> {s.backgrounds.personal}</p>
            <p><strong>Professional Background:</strong> {s.backgrounds.professional}</p>
            <p><strong>Academic Background:</strong> {s.backgrounds.academic}</p>

            {s.funFact && (
              <p><strong>Fun Fact:</strong> {s.funFact}</p>
            )}

            {s.quote?.text && (
              <blockquote>
                {s.quote.text} <br />— {s.quote.author}
              </blockquote>
            )}

            <div className="links">
              {Object.entries(s.links).map(([label, url]) => (
                <a href={url} target="_blank" key={label}>
                  🔗 {label.toUpperCase()}
                </a>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
