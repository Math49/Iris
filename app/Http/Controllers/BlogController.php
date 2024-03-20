<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\User;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {   

        $blog = Blog::all();
        $users = User::all();
    
        return Inertia::render('Blog/BlogView', $blog, $users);
    }

    public function addBlog()
    {
        return Inertia::render('Blog/BlogAdd');
    }

    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'media' => 'required',
            'media_type' => 'required',
        ]);

        Blog::create([
            'title' => $request->title,
            'content' => $request->content,
            'media' => $request->media,
            'media_type' => $request->media_type,
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->route('blog.index');
    }
}
