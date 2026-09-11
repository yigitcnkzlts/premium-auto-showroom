const questions = ["Bu araç alınır mı?", "Yakıt tüketimi nasıl?", "Kronik sorunları var mı?", "Aile için uygun mu?", "Bakım maliyeti nasıl?", "İkinci eli güçlü mü?"];

export function VehicleQuickQuestions({ onSelect }: { onSelect: (question: string) => void }) {
  return <div className="advisor-suggestions">{questions.map((question) => <button type="button" key={question} onClick={() => onSelect(question)}>{question}</button>)}</div>;
}
