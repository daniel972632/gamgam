"use client";

import { CalendarDays, Copy, LogIn, MailPlus, MapPin, Plus, Search, Share2 } from "lucide-react";
import { DragEvent, FormEvent, useMemo, useState } from "react";
import type { ItineraryDay, PlaceCard, PlaceCategory, Trip } from "@/types/trip";

const initialTrip: Trip = {
  id: "demo-trip",
  title: "오사카 먹방 여행",
  destination: "Osaka, Japan",
  startsAt: "2026-07-17",
  endsAt: "2026-07-20",
  shareSlug: "osaka-gamgam-demo"
};

const initialDays: ItineraryDay[] = [
  {
    id: "day-1",
    label: "1일차",
    date: "2026-07-17",
    cards: [
      {
        id: "card-1",
        title: "간사이 공항 도착",
        area: "KIX",
        startsAt: "10:30",
        category: "transport"
      },
      {
        id: "card-2",
        title: "도톤보리 저녁",
        area: "Namba",
        startsAt: "18:00",
        category: "food"
      }
    ]
  },
  {
    id: "day-2",
    label: "2일차",
    date: "2026-07-18",
    cards: [
      {
        id: "card-3",
        title: "오사카성",
        area: "Chuo",
        startsAt: "09:30",
        category: "culture"
      },
      {
        id: "card-4",
        title: "우메다 숙소 체크인",
        area: "Umeda",
        startsAt: "16:00",
        category: "stay"
      }
    ]
  },
  {
    id: "day-3",
    label: "3일차",
    date: "2026-07-19",
    cards: [
      {
        id: "card-5",
        title: "교토 당일치기",
        area: "Kyoto",
        startsAt: "08:20",
        category: "culture"
      }
    ]
  }
];

const searchSeeds: Array<Omit<PlaceCard, "id" | "startsAt">> = [
  { title: "쿠로몬 시장", area: "Nipponbashi", category: "food" },
  { title: "신세카이 츠텐카쿠", area: "Ebisuhigashi", category: "culture" },
  { title: "우메다 스카이 빌딩", area: "Umeda", category: "culture" }
];

export function TripPlanner() {
  const [trip, setTrip] = useState(initialTrip);
  const [days, setDays] = useState(initialDays);
  const [query, setQuery] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [draggedCardId, setDraggedCardId] = useState<string | null>(null);

  const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/share/${trip.shareSlug}`;
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchSeeds;
    return searchSeeds.filter((place) => `${place.title} ${place.area}`.toLowerCase().includes(normalized));
  }, [query]);

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setTrip({
      ...trip,
      title: String(form.get("title") || trip.title),
      destination: String(form.get("destination") || trip.destination)
    });
  }

  function addPlace(place: Omit<PlaceCard, "id" | "startsAt">) {
    const nextCard: PlaceCard = {
      ...place,
      id: crypto.randomUUID(),
      startsAt: "12:00"
    };
    setDays((currentDays) =>
      currentDays.map((day, index) => (index === 0 ? { ...day, cards: [...day.cards, nextCard] } : day))
    );
  }

  function moveCard(targetDayId: string, targetCardId?: string) {
    if (!draggedCardId) return;

    setDays((currentDays) => {
      let movingCard: PlaceCard | undefined;
      const withoutCard = currentDays.map((day) => {
        const cards = day.cards.filter((card) => {
          if (card.id === draggedCardId) movingCard = card;
          return card.id !== draggedCardId;
        });
        return { ...day, cards };
      });

      if (!movingCard) return currentDays;

      const cardToMove = movingCard;

      return withoutCard.map((day) => {
        if (day.id !== targetDayId) return day;
        const insertAt = targetCardId ? day.cards.findIndex((card) => card.id === targetCardId) : day.cards.length;
        const nextCards = [...day.cards];
        nextCards.splice(insertAt < 0 ? nextCards.length : insertAt, 0, cardToMove);
        return { ...day, cards: nextCards };
      });
    });
  }

  function inviteMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMemberEmail("");
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">G</span>
          <span>Gamgam</span>
        </div>
        <div className="top-actions">
          <button className="button" type="button" title="로그인">
            <LogIn size={18} />
            로그인
          </button>
          <button className="button primary" type="button" title="공유 링크">
            <Share2 size={18} />
            공유
          </button>
        </div>
      </header>

      <main className="main">
        <aside className="sidebar">
          <section className="section">
            <h2>여행 생성</h2>
            <form className="stack" onSubmit={createTrip}>
              <label className="field">
                <span>여행 이름</span>
                <input className="input" name="title" defaultValue={trip.title} />
              </label>
              <label className="field">
                <span>도시</span>
                <input className="input" name="destination" defaultValue={trip.destination} />
              </label>
              <button className="button primary" type="submit">
                <Plus size={18} />
                생성
              </button>
            </form>
          </section>

          <section className="section">
            <h2>장소 검색</h2>
            <label className="field">
              <span>검색어</span>
              <input
                className="input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="장소 또는 지역"
              />
            </label>
            <div className="stack">
              {results.map((place) => (
                <div className="search-result" key={place.title}>
                  <span>
                    <strong>{place.title}</strong>
                    <br />
                    <span className="muted">{place.area}</span>
                  </span>
                  <button className="icon-button" type="button" title="일정에 추가" onClick={() => addPlace(place)}>
                    <Plus size={17} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>멤버 초대</h2>
            <form className="stack" onSubmit={inviteMember}>
              <label className="field">
                <span>이메일</span>
                <input
                  className="input"
                  type="email"
                  value={memberEmail}
                  onChange={(event) => setMemberEmail(event.target.value)}
                  placeholder="friend@example.com"
                />
              </label>
              <button className="button" type="submit">
                <MailPlus size={18} />
                초대
              </button>
            </form>
          </section>

          <section className="section">
            <h2>공유 링크</h2>
            <div className="share-box">{shareUrl}</div>
            <button className="button" type="button" onClick={() => navigator.clipboard?.writeText(shareUrl)}>
              <Copy size={18} />
              복사
            </button>
          </section>
        </aside>

        <section className="planner">
          <div className="trip-title">
            <div>
              <h1>{trip.title}</h1>
              <div className="trip-meta">
                <span className="pill">
                  <MapPin size={15} />
                  {trip.destination}
                </span>
                <span className="pill">
                  <CalendarDays size={15} />
                  {trip.startsAt} - {trip.endsAt}
                </span>
              </div>
            </div>
            <span className="pill">MVP 1단계</span>
          </div>

          <div className="day-grid">
            {days.map((day) => (
              <article
                className="day-column"
                key={day.id}
                onDragOver={(event) => event.preventDefault()}
                onDrop={() => moveCard(day.id)}
              >
                <div className="day-header">
                  <strong>{day.label}</strong>
                  <span className="muted">{day.date}</span>
                </div>
                <div className="cards">
                  {day.cards.map((card) => (
                    <PlaceCardView
                      card={card}
                      key={card.id}
                      onDragStart={() => setDraggedCardId(card.id)}
                      onDragEnd={() => setDraggedCardId(null)}
                      onDrop={() => moveCard(day.id, card.id)}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function PlaceCardView({
  card,
  onDragStart,
  onDragEnd,
  onDrop
}: {
  card: PlaceCard;
  onDragStart: () => void;
  onDragEnd: () => void;
  onDrop: () => void;
}) {
  return (
    <div
      className={`place-card color-${card.category}`}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={(event: DragEvent<HTMLDivElement>) => event.preventDefault()}
      onDrop={(event) => {
        event.stopPropagation();
        onDrop();
      }}
    >
      <div className="place-top">
        <strong>{card.title}</strong>
        <span className="time">{card.startsAt}</span>
      </div>
      <span className="muted">{card.area}</span>
      <span className="pill">{categoryLabel(card.category)}</span>
    </div>
  );
}

function categoryLabel(category: PlaceCategory) {
  const labels: Record<PlaceCategory, string> = {
    food: "맛집",
    culture: "관광",
    stay: "숙소",
    transport: "이동"
  };
  return labels[category];
}
