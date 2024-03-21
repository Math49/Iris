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

        $blogs = Blog::all();
        $users = User::all();

    
        return Inertia::render('Blog/BlogView', [
            'blogs' => $blogs,
            'users' => $users
        ]);
    }

    public function donnationBlog()
    {
        $blogs = Blog::all();
        return Inertia::render('Donnation', [
            'blogs' => $blogs
        ]);
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
            'media_type' => 'required|in:image,video',
            'media' => 'required|file|mimes:jpeg,jpg,png,gif,mp4,mov,avi,flv,wmv',
        ]);
    
        $file = $request->file('media');
        $fileName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('media', $fileName, "public");

        Blog::create([
            'user_id' => auth()->user()->id,
            'title' => $request->title,
            'content' => $request->content,
            'media_type' => $request->media_type,
            'media' => asset("storage/".$path),
        ]);
        
        return redirect()->route('blog.index');
    }

    public function show($id)
    {
        $blog = Blog::find($id);
        $users = User::all();

        return Inertia::render('Blog/ArticlePattern', [
            'blog' => $blog,
            'users' => $users
        ]);
    }

    public function dashboard()
    {
        $blogs = Blog::all();
        $users = User::all();

        return Inertia::render('Blog/GestionBlog', [
            'blogs' => $blogs,
            'users' => $users
        ]);
    }

    public function destroy($id)
    {
        Blog::destroy($id);

        return redirect()->back();
    }
}
