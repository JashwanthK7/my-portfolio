export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ success: false, error: "Missing fields" }),
                { status: 400 }
            );
        }

        console.log("New contact form submission:", body);

        return new Response(
            JSON.stringify({ success: true, message: "Message received" }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: "Server error" }),
            { status: 500 }
        );
    }
}