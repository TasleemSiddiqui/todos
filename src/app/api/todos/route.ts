import { db, todos } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const results = await db.select().from(todos);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await db.insert(todos).values(body);

 
    return NextResponse.json("Data submited Successfully");
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    await  db.update(todos)
    .set(body )
    .where(eq(todos.id ,body.id));

 
    return NextResponse.json("Data updated Successfully");
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
}
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    await db.delete(todos).where(eq(todos.id, body.id));

 
    return NextResponse.json("Data updated Successfully");
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
}